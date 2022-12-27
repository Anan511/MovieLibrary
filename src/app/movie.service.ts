import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor(private messageService: MessageService) { }

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
