import {Component, OnInit} from '@angular/core';
import {Movie} from "./models/Movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  movies : Movie[] =
  [
    {
      id:0,
      title:"The Shawshank Redemption",
      subtitle: "1994 ‧ Drama/Crime film ‧ 2h 22m",
      description : "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
      rating: 9.3
},
    {
      id:1,
      title:"The Godfather",
      subtitle: "1972 ‧ Drama/Crime film ‧ 2h 58m",
      description : "I'm gonna make him an offer he can't refuse.",
      rating: 9.2
    },
    {
      id:2,
      title:"The Godfather: Part II",
      subtitle: "1974 ‧ Drama/Crime film ‧ 3h 22m",
      description : "Keep your friends close, but your enemies closer.",
      rating: 9.0
},
    {
      id:3,
      title:"The Dark Knight",
      subtitle: "2008 ‧ Drama/Crime film ‧ 2h 32m",
      description : "Why so serious?",
      rating: 9.0
},
    {
      id:4,
      title: "Pokemon Detective Pikachu",
      subtitle: "2019 ‧ Fantasy/Mystery ‧ 1h 45m",
      description : "pokemon detective pikachu",
      rating: 7.0
    },
    {
      id:5,
      title: "Avengers: Endgame",
      subtitle: "2019 ‧ Fantasy/Sci-fi ‧ 3h 2m",
      description : "Avengers: Endgame",
      rating: 8.5
    }];
  constructor() {
  }

  ngOnInit() {
  }

  totalMovies(){
    return this.movies.length;
  }

  averageRating(){
    let sum = 0;
    for(let i = 0; i < this.movies.length; i++){
      sum += this.movies[i].rating;
    }
    return sum / this.movies.length;
  }

}
