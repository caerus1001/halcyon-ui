import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { AppComponent } from '../components/app/app.component';
import { HomeComponent } from '../components/home/home.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from '../components/games/games.component';
import { MaterialModule } from './material.module';
import { GameComponent } from '../components/game/game.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { ReviewComponent } from '../components/review/review.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: 'api/logs', level: NgxLoggerLevel.DEBUG}),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    GamesComponent,
    GameComponent,
    ReviewsComponent,
    ReviewComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }