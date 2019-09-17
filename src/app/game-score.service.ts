import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NGXLogger } from 'ngx-logger';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class GameScoreService {
  private baseContext: string = 'http://localhost:8080/api';
  private gameScoreUrl: string = '/gameScore';

  constructor(private http: HttpClient, private logger: NGXLogger) { }

  getGameScore(id: number): Observable<number> {
    const url: string = `${this.baseContext}${this.gameScoreUrl}/${id}`;
    return this.http.get<number>(url).pipe(tap(_ => this.logger.info(`fetched game score for ${id}`)), catchError(this.handleError<number>(`get game score=${id}`)));
  }

  postGameScore(id: number): void {
    const url: string = `${this.gameScoreUrl}/${id}`;
    this.http.put<number>(url, id, httpOptions).pipe(tap(_ => this.logger.info(`updated score to game ${id}`)), catchError(this.handleError<number>('put score')));
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
