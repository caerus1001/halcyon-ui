import { Component, OnInit, Inject } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { QuickScoreModalComponent } from 'src/app/quick-score-modal/quick-score-modal.component';

@Component({
  selector: 'app-games-by-platform',
  templateUrl: './games-by-platform.component.html',
  styleUrls: ['./games-by-platform.component.css']
})
export class GamesByPlatformComponent implements OnInit {
  animal: string;
  name: string;

  gamesByPlatform: Game[];

  constructor(private route: ActivatedRoute, public gameService: GameService, public dialog: MatDialog) { 
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.getGamesByPlatform(params['platformName'])});
  }

  getGamesByPlatform(platformName: string): void {
    this.gameService.getGames().pipe(
      map(games => games.filter(game => game.platforms.includes(platformName)))).subscribe(games => this.gamesByPlatform = games);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuickScoreModalComponent, {
      width: '300px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}