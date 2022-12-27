import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MoviesTableComponent } from './movies-table/movies-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieDetailComponent,
    MoviesComponent,
    MessagesComponent,
    SearchFilterPipe,
    MoviesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
