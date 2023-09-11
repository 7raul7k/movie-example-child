import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() ratings = 0;

  @Input() numberMovies = 0;

      constructor() { }

      ngOnInit() {
      }

}
