import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { GameScoreService } from '../game-score.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-rating-bar',
  templateUrl: './game-rating-bar.component.html',
  styleUrls: ['./game-rating-bar.component.css'],
  animations: [
    trigger('gameRatingBarExpansionAnimations', [
      state('small', style({
        height: '4px'
      })),
      state('large', style({
        height: '10px'
      })),
      transition('small => large', animate('300ms ease-in')),
      transition('large => small', animate('300ms ease-out')),
    ]),
  ]
})
export class GameRatingBarComponent implements OnInit {
  state: string = 'small';
  score: number = 20;

  constructor(public route: ActivatedRoute, public gameScoreService: GameScoreService) { }

  animateMe(): void {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.getGameScore(params['id'])});
  }

  getGameScore(id: number): void {
    this.gameScoreService.getGameScore(id).subscribe(score => this.score = score);
  }
}
