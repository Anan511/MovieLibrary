import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Movie {
  name: string;
  country: string;
  ranking: number;
}

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent {
 
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    }
  
}
