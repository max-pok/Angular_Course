import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categorysList = ['Bread', 'Dairy', 'Fruits', 'Seasoning and Spices', 'Vegetables'];
  activeLink = 'all';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {   
    this.route.queryParams.subscribe(params => {
      if (params.category) {
        console.log(params);
        this.activeLink = params.category;
      } else {
        this.activeLink = 'all';
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