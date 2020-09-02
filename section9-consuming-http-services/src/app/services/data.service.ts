import { Injectable } from '@angular/core';
import { AppError } from './../utilities/app-error';
import { NotFoundError } from './../utilities/not-found-error';
import { BadRequestError } from './../utilities/bad-request-error';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient, private url: string) { }

  public get getAll() {
    return this.http.get(this.url).pipe(
      map((response: Response) => response),
      catchError(this.handleError));
  }

  public create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((response: Response) => response),
      catchError(this.handleError)); // "catchError" instead of "catch"
  }

  public update(resource) {
    return this.http.patch(this.url + '/' + resource['id'], JSON.stringify({ isRead: true }))
      .pipe(
        map((response: Response) => response),
        catchError(this.handleError)); // "catchError" instead of "catch"
  }

  public delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        map((response: Response) => response),
        catchError(this.handleError)); // "catchError" instead of "catch"
    
    // Promise use:
    // return this.http.delete(this.url + '/' + id)
    //   .pipe(
    //     map((response: Response) => response),
    //     catchError(this.handleError)).toPromise();
  }

  private handleError(error: Response) {
    if (error.status === 404)
      return throwError(new NotFoundError());
    if (error.status === 400)
      return throwError(new BadRequestError(error.json));
    
    return throwError(new AppError(error));
  }
}