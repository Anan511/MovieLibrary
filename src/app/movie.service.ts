import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { movieModel } from './Model/movieModel';

@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor(private messageService: MessageService, private http: HttpClient) { }
  url = 'http://localhost:3000/movies';

  Getallmovie(): Observable<movieModel[]> {
    return this.http.get<movieModel[]>(this.url);
  }

  Updatemovie(id: any, movieModel: any) {
    return this.http.put<any>(this.url + '/' + id, movieModel).subscribe(data => this.getMovie = data.id);
    
  }

  getMovies(): Observable<Movie[]> {
    const movies = of(MOVIES);
    this.messageService.add('MovieService: fetched movies');
    return movies;
  }

  getMovie(id: number): Observable<Movie> {
    
    const movie = MOVIES.find(h => h.id === id)!;
    this.messageService.add(`MovieService: fetched movie id=${id}`);
    return of(movie);
  }
}
