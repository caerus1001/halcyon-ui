import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppComponent } from '../components/app/app.component';
import { HomeComponent } from '../components/home/home.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from '../components/games/games.component';
import { MaterialModule } from './material.module';
import { GameComponent } from '../components/gamePage/game/game.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { ReviewComponent } from '../components/review/review.component';
import { GamesByPlatformComponent } from '../components/games-by-platform/games-by-platform.component';
import { QuickScoreModalComponent } from '../quick-score-modal/quick-score-modal.component';
import { GameRatingBarComponent } from '../game-rating-bar/game-rating-bar.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import {FormsModule} from '@angular/forms';
import { GameTabGroupComponent } from '../components/gamePage/game-tab-group/game-tab-group.component';
import { GameIntroductionComponent } from '../components/gamePage/game-introduction/game-introduction.component';
import { GameImagesComponent } from '../components/gamePage/game-images/game-images.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: 'api/logs', level: NgxLoggerLevel.DEBUG}),
    FormsModule
  ],
  entryComponents: [GamesByPlatformComponent, QuickScoreModalComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    GamesComponent,
    GameComponent,
    ReviewsComponent,
    ReviewComponent,
    GamesByPlatformComponent,
    QuickScoreModalComponent,
    GameRatingBarComponent,
    LoginComponent,
    SignupComponent,
    GameTabGroupComponent,
    GameIntroductionComponent,
    GameImagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
