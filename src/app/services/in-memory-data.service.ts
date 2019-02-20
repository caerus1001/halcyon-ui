import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from '../models/game';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
     const games = [
      {id: 1, title: 'Resident Evil 2', releaseDate: new Date('01/25/2019'), genre: new Genre('Horror')},
      {id: 2, title: 'Rimworld', releaseDate: new Date('04/12/2018'), genre: new Genre('Simulation')},
      {id: 5, title: 'Witcher 3', releaseDate: new Date('11/01/2017'), genre: new Genre('RPG')}
    ];
    return {games};
  }

  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 1;
  }
}
