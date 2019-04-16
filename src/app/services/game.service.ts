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
  private gamesUrl: string = 'api/games';

  constructor(private http: HttpClient, private logger: NGXLogger) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl).pipe(tap(_ => this.logger.info('fetched all games')), 
    catchError(this.handleError('getGames', [])));
  }

  /*getGamesByPlatform(platformName: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.gamesUrl}/${platformName}`)
    .pipe(tap(_ => this.logger.info(`fetched games for platform ${platformName}`)), catchError(this.handleError('getGamesByPlatform', [])));
  }*/

  getGame(id: number): Observable<Game> {
    const url: string = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url).pipe(tap(_ => this.logger.info(`fetched game id=${id}`)), catchError(this.handleError<Game>(`getGame id=${id}`)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); // log to console instead
      this.logger.debug(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
