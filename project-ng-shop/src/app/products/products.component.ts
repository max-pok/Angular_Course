import { Cart } from './../utilities/models/cart';
import { ADD_TO_CART } from './actions';
import { ICartState } from './store';
import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { Product } from '../utilities/models/product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];
  @select(s => s.cart.products_list) productsInCart: Cart[];
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private ngRedux: NgRedux<ICartState>) { }

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
  }

  isProductInCart(p) {
    return false;
  }

  addToCart(product: Product) {
    this.ngRedux.dispatch({ type: ADD_TO_CART, product });
  }

}
