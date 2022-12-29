import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { movieModel } from '../Model/movieModel';
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
export class MoviesTableComponent implements OnInit {

  moviedata!: movieModel[];
  columns = ["Movie Id", "Name", "Profit Earned", "Year of Release", "Country", "isEdit"];
  index = ["id", "name", "profitEarned", "yearOfRelease", "country","isEdit"];

  movies: Movie[] = [];
  p: number = 1;
  total: number = 0;

  loadMovies() {
    this.movieService.Getallmovie().subscribe(response => {
      this.moviedata = response;
      
    })
  }
  constructor(private movieService: MovieService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadMovies();
  }
  onEdit(item: any) {
    //debugger;
    this.moviedata.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }
  saveMovie() {
   // debugger
    this.httpClient.post('http://localhost:3000/movies', this.moviedata).subscribe((result) => {
      alert("Record saved sucessfully");
    });
  }
  

  pageChangeEvent(event: number) {
    this.p = event;
    this.loadMovies();
  }


}
