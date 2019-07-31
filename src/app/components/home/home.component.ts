import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favoriteFood: string;

  constructor() {
  }

  ngOnInit() {
  }

  displayFood(): void {
    console.log(`favorite food: ${this.favoriteFood} right here!!!`);
  }
}
