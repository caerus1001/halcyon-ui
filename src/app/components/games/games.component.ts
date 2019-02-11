import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) { 
    this.games = this.getGames();
  }

  ngOnInit() {

  }

  getGames(): Game[] {
    return null;
  }
}
