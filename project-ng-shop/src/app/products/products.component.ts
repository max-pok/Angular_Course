import { Cart } from './../utilities/models/cart';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';
import { ICartState } from './store';
import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { Product } from '../utilities/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];
  @select(s => s.cart.products_list) cartObservable: Observable<any>;
  cart;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getAllProducts().pipe(
      switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
    ).subscribe(params => {
      if (params.get('category')) {
          this.filteredProducts = this.products.filter(p => p.category === params.get('category'));
      } else {
        this.filteredProducts = this.products;
      }     
    });

    this.cartObservable.subscribe(products_array => {
      this.cart = products_array;
    });
  }

  getAmountOfProductInCart(product) {
    for (let p of this.cart) {
      if (p.product.title === product.title) return p.amount;   
    }
    return 0;
  }

}
