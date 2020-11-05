import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../utilities/models/product';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorysList = ['Bread', 'Dairy', 'Fruits', 'Seasoning and Spices', 'Vegetables'];
  products: Product[];
  filteredProducts: Product[];
  activeLink = 'all';


  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {   
    this.productService.getAllProducts().pipe(
      switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
    ).subscribe(params => {
      if (params.get('category')) {
          this.activeLink = params.get('category');
          this.filteredProducts = this.products.filter(p => p.category === this.activeLink);
      } else {
        this.filteredProducts = this.products;
      }     
    });
  }

}

// this.productService.getAllProducts().pipe(
//   switchMap(products => {
//     this.products = products;
//     return this.route.queryParamMap;
//   })
// ).subscribe(params => {
//   if (params.get('category')) {
//     this.activeLink = params.get('category');
//     this.filteredProducts = this.products.filter(p => p.category === params.get('category'));
//   } else {
//     this.filteredProducts = this.products;
//   }
// });