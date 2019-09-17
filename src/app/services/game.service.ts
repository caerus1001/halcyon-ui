import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseContext: string = 'http://localhost:8080/api';
  private gamesByPlatformUrl: string = '/games/platforms/';
  private gamesUrl: string = '/game';

  constructor(private http: HttpClient, private logger: NGXLogger) { }

  getGamesByPlatform(platformName: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseContext + this.gamesByPlatformUrl + platformName).pipe(tap(_ => this.logger.info('fetched all games')),
    catchError(this.handleError('getGames', [])));
  }

  /*getGamesByPlatform(platformName: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.gamesUrl}/${platformName}`)
    .pipe(tap(_ => this.logger.info(`fetched games for platform ${platformName}`)), catchError(this.handleError('getGamesByPlatform', [])));
  }*/

  getGame(id: number): Observable<Game> {
    const url: string = `${this.baseContext}${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url).pipe(tap(_ => this.logger.info(`fetched game id=${id}`)), catchError(this.handleError<Game>(`getGame id=${id}`)));
  }

  getGamesByCurrentDate(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseContext + this.gamesUrl).pipe(tap(_=> this.logger.info(`fetched gamesByCurrentDate`)), catchError(this.handleError<Game[]>(`getGamesByCurrentDate`)));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.logger.debug(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
