import { Component } from '@angular/core';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  //title = 'Search Movie';
  searchText='';
  movies = [
    { id: 11, name: '2009 Avatar', country: 'USA' },
    { id: 12, name: 'Harry Potter and the Half-Blood Prince', country: 'USA' },
    { id: 13, name: 'Ice Age: Dawn of the Dinosaurs', country: 'UK' },
    { id: 14, name: 'Transformers: Revenge of the Fallen', country: 'Canada' },
    { id: 15, name: '2012', country: 'Russia' },
    { id: 16, name: 'Up', country: 'India' },
    { id: 17, name: 'The Twilight Saga: New Moon', country: 'Germany' },
    { id: 18, name: 'Sherlock Holmes', country: 'Hong Kong' },
    { id: 19, name: 'Angels & Demons', country: 'South Africa' },
    { id: 20, name: 'The Hangover', country: 'Sri Lanka' }
  ];

}
