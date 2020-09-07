import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RequestOptions, Headers, Http } from '@angular/http';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() {   
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    let options = new RequestOptions({ headers: headers});
    return this.http.get('/api/orders', options).pipe(
      map(response => response.json())
    );
  }
}
