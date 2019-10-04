import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/game';

@Component({
  selector: 'app-game-tab-group',
  templateUrl: './game-tab-group.component.html',
  styleUrls: ['./game-tab-group.component.css']
})
export class GameTabGroupComponent implements OnInit {
  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
