import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    //this.gameService.getGamesByPlatform().subscribe(games => this.games = games);
  }

  getGame(id: number): Observable<Game> {
    return this.gameService.getGame(id);
  }
}
