import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return null;
  }

  getGame(name: string): Game {
    return null;
  }
}
