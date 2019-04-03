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
      {id: 1, title: 'Resident Evil 2', releaseDate: '01/25/2019', genre: 'Horror', platforms: ['PS4', 'XOne', 'PC'], publisher: 'Capcom'},
      {id: 2, title: 'Rimworld', releaseDate: '04/12/2018', genre: 'Simulation', platforms: ['PC'], publisher: 'Ludeon Studios'},
      {id: 3, title: 'Witcher 3', releaseDate: '11/01/2017', genre: 'RPG', platforms: ['PS4', 'XOne', 'PC'], publisher: 'Projekt RED'},
      {id: 4, title: 'God of War', releaseDate: '08/02/2017', genre: 'Action/Adventure', platforms: ['PS4'], publisher: 'Sony Interactive Entertainment'},
      {id: 5, title: 'Halo 4', releaseDate: '07/24/2016', genre: 'Action/Adventure', platforms: ['XOne'], publisher: '343 Industries'},
      {id: 6, title: 'Dark Souls III', releaseDate: '02/20/2016', genre: 'RPG', platforms: ['PS4', 'XOne', 'PC'], publisher: 'From Software'},
      {id: 7, title: 'Horizon Zero Dawn', releaseDate: '02/28/2017', genre: 'RPG', platforms: ['PS4'], publisher: 'Guerilla Games'},
      {id: 8, title: 'Gears of War 4', releaseDate: '10/11/2016', genre: 'TPS', platforms: ['XOne'], publisher: 'The Coalition'},
      {id: 9, title: 'Player Unknown\'s Battlegrounds', releaseDate: '06/13/2017', genre: 'Battle Royale', platforms: ['PS4', 'XOne', 'PC'], publisher: 'BlueHole'}
    ];
    return {games};
  }

  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 1;
  }
}
