import { ArchiveDataService } from './../services/archive-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  archiveDates;
  constructor(private service: ArchiveDataService) { }

  ngOnInit(): void {
    this.archiveDates = this.service.getData;
  }

}
