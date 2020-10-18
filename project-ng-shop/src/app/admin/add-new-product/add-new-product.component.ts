import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  form: FormGroup;
  categorysList = ['Bread' ,'Dairy', 'Fruits', 'Seasoning and Spices', 'Vegetables' ];
  deleteButtonAppearance = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required ],
      price: ['', Validators.required ],
      categorys: [null, Validators.required ],
      ImageURL: ['',  ],
    });

    if (this.route.snapshot.paramMap.get('id')) this.initComponent(this.route.snapshot.paramMap.get('id'));
  } 

  initComponent(docId) {   
    this.deleteButtonAppearance = true;
    
    this.productService.getProduct(docId).forEach(value => {
      if (value) {
        this.title.setValue(value.title);
        this.price.setValue(value.price);
        this.categorys.setValue(value.category);
        this.ImageURL.setValue(value.imageUrl);
      }
    });
  }

  get title() {
    return this.form.get('title');   
  }
  
  get price() {
    return this.form.get('price');
  }
  
  get categorys() {
    return this.form.get('categorys');
  }
  
  get ImageURL() {
    return this.form.get('ImageURL');
  }

  ngOnInit(): void {
  }

  saveProduct() {
    if (this.form.valid) {
      this.productService.saveProduct(this.title.value, this.price.value, this.categorys.value, this.ImageURL.value);
    }
  }

  updateProduct() {
    this.productService.updateProduct(this.route.snapshot.paramMap.get('id'), this.title.value, this.price.value, this.categorys.value, this.ImageURL.value);
  }

  
  deleteProduct() {
    this.productService.removeProduct(this.route.snapshot.paramMap.get('id')).then(() => {
      this.router.navigate(['admin/products']);
    });
  }

}
