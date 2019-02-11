import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../components/app/app.component';
import { HomeComponent } from '../components/home/home.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { GamesComponent } from '../components/games/games.component';
import { MaterialModule } from './material.module';
import { GameComponent } from '../components/game/game.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { ReviewComponent } from '../components/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    GamesComponent,
    GameComponent,
    ReviewsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
