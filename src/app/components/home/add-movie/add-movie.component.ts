import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../models/Movie";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit{

    movieTitleValue = "";
    movieSubtitleValue = "";
    movieDescriptionValue = "";
    movieRatingValue = 0;


    @Input("numberMovie") numberMovies = 0;
    @Output() addMovie = new EventEmitter<{title:string, subtitle:string, description:string, rating:number}>();

   onAddMovie() {
   this.addMovie.emit({title:this.movieTitleValue, subtitle:this.movieSubtitleValue, description:this.movieDescriptionValue, rating:this.movieRatingValue});
   }

  constructor() {
  }

  ngOnInit() {

  }

}
