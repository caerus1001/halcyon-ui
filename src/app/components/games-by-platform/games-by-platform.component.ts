import { Component, OnInit, Inject } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { QuickScoreModalComponent } from 'src/app/quick-score-modal/quick-score-modal.component';
import { GameScoreService } from 'src/app/game-score.service';

@Component({
  selector: 'app-games-by-platform',
  templateUrl: './games-by-platform.component.html',
  styleUrls: ['./games-by-platform.component.css']
})
export class GamesByPlatformComponent implements OnInit {
  gamesByPlatform: Game[];

  constructor(private route: ActivatedRoute, public gameService: GameService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.getGamesByPlatform(params['platformName'])});
  }

  getGamesByPlatform(platformName: string): void {
    this.gameService.getGamesByPlatform(platformName).subscribe(gamesByPlatform => this.gamesByPlatform = gamesByPlatform);
  }

  openDialog(game: Game): void {
    this.dialog.open(QuickScoreModalComponent, {
      width: '450px',
      data: {game: game}
    });
  }
}
