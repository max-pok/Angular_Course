import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  displayedColumns: string[] = ['Product', 'Amount', 'Price'];
  @select(s => s.cart.count) totalProducts;
  @select(s => s.cart.products_list) productsObservable: Observable<any>;
  products = new  MatTableDataSource<any>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsObservable.subscribe(products => {
      this.products.data = products;
    });
  }

  refresh() {
    this.productsObservable.subscribe(products => {
      this.products.data = products;
    });
  }

  getTotalPrice(): number {
    let total = 0;
    for (let p of this.products.data) total += p.product.price * p.amount;

    return total;
  }

}
