import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: Game;

  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit() {
    this.getGame();
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id).subscribe(game => this.game = game);
  }
}
