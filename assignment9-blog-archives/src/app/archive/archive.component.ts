import { ArchiveDataService } from './../services/archive-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number;
  month: number;
  constructor(private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    // Option 1
    // this.route.paramMap.subscribe(params => {
    //   this.year = +params.get('year');     
    //   this.month = +params.get('month');     
    // });

    // Option 2
    this.year = +this.route.snapshot.paramMap.get('year');
    this.month = +this.route.snapshot.paramMap.get('month');
  }

  onViewAll() {
    this.router.navigate(['']);
  }

}
