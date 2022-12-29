import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { movieModel } from '../Model/movieModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private movieService: MovieService, private api: MovieService) { }
  
  finaldata: any;
  moviedata!: movieModel[];
  columns = ["Movie Id","Name", "Profit Earned", "Year of Release", "Country"];
  index = ["id", "name", "profitEarned", "yearOfRelease", "country"];

  movies: Movie[] = [];
  p: number = 1;
  total: number = 0;
  x: number = 0;

  

  ngOnInit(): void {
    
    this.loadMovies();
  }

   loadMovies() {
    this.api.Getallmovie().subscribe(response => {
      this.moviedata = response;
     
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.loadMovies();
  }
}
 
