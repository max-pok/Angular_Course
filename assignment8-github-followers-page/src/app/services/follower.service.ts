import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FollowerService extends DataService { 

  constructor(http: HttpClient) {
    super(http, 'https://api.github.com/users/mosh-hamedani/followers');
  }
}
