import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/game';


@Component({
  selector: 'app-game-introduction',
  templateUrl: './game-introduction.component.html',
  styleUrls: ['./game-introduction.component.css']
})
export class GameIntroductionComponent implements OnInit {
  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
