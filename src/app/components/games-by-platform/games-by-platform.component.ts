import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-games-by-platform',
  templateUrl: './games-by-platform.component.html',
  styleUrls: ['./games-by-platform.component.css']
})
export class GamesByPlatformComponent implements OnInit {
  gamesByPlatform: Game[];

  constructor(private route: ActivatedRoute, public gameService: GameService) { 
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.getGamesByPlatform(params['platformName'])});
  }

  getGamesByPlatform(platformName: string): void {
    this.gameService.getGames().pipe(
      map(games => games.filter(game => game.platforms.includes(platformName)))).subscribe(games => this.gamesByPlatform = games);
  }
}