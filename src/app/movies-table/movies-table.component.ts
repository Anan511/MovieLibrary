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
  searchTerm = '';
  movies: Movie[] = [];
  allMovies: Movie[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    debugger;
    this.http
      .get<Movie[]>('./db.json')
      .subscribe((data: Movie[]) => {
        this.movies = data;
        this.allMovies = this.movies;
      });
  }
  search(value: string): void {
    this.movies = this.allMovies.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }
}
