import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../models/Movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  implements OnInit{

  @Input() allMovies: Movie = {
    id: 0,
    title: "",
    subtitle: "",
    description: "",
    rating: 0,
  }

  @Output() changeScore = new EventEmitter<{ id: number, score: number }>();

  @Output() deleteMovie = new EventEmitter<{id : number}>();

    constructor() {

    }

    ngOnInit() {

    }

    onDeleteMovie(){

        this.deleteMovie.emit({id:this.allMovies.id});
    }

    onChangeScore(value: number) {
        this.allMovies.rating += value;
    }
}
