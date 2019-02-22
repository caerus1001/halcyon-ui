import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-games-by-platform',
  templateUrl: './games-by-platform.component.html',
  styleUrls: ['./games-by-platform.component.css']
})
export class GamesByPlatformComponent implements OnInit {
  gamesByPlatform: Game[];

  constructor(private route: ActivatedRoute, public gameService: GameService) { }

  ngOnInit() {
    //this.getGamesByPlatform();
  }

  /*getGamesByPlatform(): void {
    const platformName = this.route.snapshot.paramMap.get('platformName');
    this.gameService.getGamesByPlatform(platformName).subscribe(gamesByPlatform => this.gamesByPlatform = gamesByPlatform);
  }*/
}