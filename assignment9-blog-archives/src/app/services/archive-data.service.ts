import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchiveDataService {
  constructor() {}

  get getData() {
    let archive = [];
    archive.push(new Date(2017, 1));
    archive.push(new Date(2017, 2));
    archive.push(new Date(2017, 3));
    return archive;
  }
}
