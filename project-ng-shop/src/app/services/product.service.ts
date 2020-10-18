import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from '../utilities/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afs: AngularFirestore, private router: Router) { }

  saveProduct(title: string, price: number, category: string, imageUrl: string) {
    this.afs.collection('Products').add({ title: title, price: price, category: category, imageUrl: imageUrl }).then(() => this.router.navigate(['admin/products']));
  }

  updateProduct(id, title: string, price: number, category: string, imageUrl: string) {
    // todo.
  }

  removeProduct(id) {
    return this.afs.collection('Products').doc(id).delete();
  }

  getProducts() {
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
}
