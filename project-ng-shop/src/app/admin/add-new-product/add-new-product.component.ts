import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  form: FormGroup;

  categorys: [
    { id: 1, name: 'Bread' }
  ];

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
