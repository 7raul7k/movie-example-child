import {Component, Input, OnInit} from '@angular/core';
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

    constructor() {

    }

    ngOnInit() {

    }

}
