import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../utilities/models/product';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements AfterViewInit, OnInit, OnDestroy {
  displayedColumns: string[] = ['number', 'title', 'price', 'edit'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService, public router: Router) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.dataSource = new MatTableDataSource(products);
    })
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
