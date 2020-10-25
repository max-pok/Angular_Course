import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterState } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorysList = ['Bread', 'Dairy', 'Fruits', 'Seasoning and Spices', 'Vegetables'];
  products$ = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.route.queryParams.subscribe(params => {
      if (params.category) {
        this.productService.getAllProductsByCategory(params.category).subscribe(products => this.products$ = products);
      } else {
        this.productService.getAllProducts().subscribe(products => this.products$ = products);
      }
    });
  
    
  }

}
