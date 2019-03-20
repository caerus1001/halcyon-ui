import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from '../models/game';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { Platform } from '../models/platform';;

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
     const games = [
      {id: 1, title: 'Resident Evil 2', releaseDate: '01/25/2019', genre: 'Horror', platforms: ['PS4', 'XOne', 'PC']},
      {id: 2, title: 'Rimworld', releaseDate: '04/12/2018', genre: 'Simulation', platforms: ['PC']},
      {id: 3, title: 'Witcher 3', releaseDate: '11/01/2017', genre: 'RPG', platforms: ['PS4', 'XOne', 'PC']},
      {id: 4, title: 'God of War', releaseDate: '08/02/2017', genre: 'Action/Adventure', platforms: ['PS4']},
      {id: 5, title: 'Halo 4', releaseDate: '07/24/2016', genre: 'Action/Adventure', platforms: ["XOne'"]}
    ];
    return {games};
  }

  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 1;
  }
}
