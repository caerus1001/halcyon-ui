import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '../components/games/games.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { GameComponent } from '../components/game/game.component';

const routes: Routes = [
  { 
    path: 'games', component: GamesComponent,
  },
  {
    path: 'games/game/:id', component: GameComponent
  },
  {
    path: 'reviews', component: ReviewsComponent
  }
]

@NgModule({
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
