import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../products/actions';
import { ICartState } from '../products/store';
import { Product } from '../utilities/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afs: AngularFirestore, private router: Router, private ngRedux: NgRedux<ICartState>) { }

  saveProduct(title: string, price: number, category: string, imageUrl: string) {
    return this.afs.collection('Products').add({ title: title, price: price, category: category, imageUrl: imageUrl });;
  }

  updateProduct(id, title: string, price: number, category: string, imageUrl: string) {
    this.afs.collection('Products').doc(id).update(Object.assign({}, 
      { title: title, price: price, category: category, imageUrl: imageUrl }
      ));
  }

  removeProduct(id) {
    return this.afs.collection('Products').doc(id).delete();
  }

  getAllProducts() {
    return this.afs.collection('Products').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Product;
          data['id'] = a.payload.doc.id;
          data['index'] = a.payload.newIndex;
          return data;
        })
      })
    );
  }

  getProduct(docId: string) {
    return this.afs.collection('Products').doc(docId).snapshotChanges().pipe(
      map(a => {
        return (a.payload.data() as Product);
      }
    ));
  }

  addToCart(product: Product) {    
    this.ngRedux.dispatch({ type: ADD_TO_CART, product });
  }

  removeFromCart(product: Product) {
    this.ngRedux.dispatch({ type: REMOVE_FROM_CART, product });
  }
}
