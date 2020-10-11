import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo).pipe(
      map(r => r
      ));
  }

  getTodos() { 
    return this.http.get('...').pipe(
      map(r => r
      ));
  }

  getTodosPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = [];
      resolve(data);
  });
  }

  delete(id) {
    return this.http.delete('...').pipe(
    map(r => r
    ));
  }
}
