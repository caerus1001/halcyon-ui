import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/game';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Image} from '../../../models/image';

@Component({
  selector: 'app-game-images',
  templateUrl: './game-images.component.html',
  styleUrls: ['./game-images.component.css'],
  animations: [
    trigger('gameImageExpansionAnimation', [
      state('small', style({
        width: '50vw'
      })),
      state('large', style({
        width: '90vw',
      })),
      transition('small => large', animate('300ms ease-in')),
      transition('large => small', animate('300ms ease-out')),
    ]),
  ]
})
export class GameImagesComponent implements OnInit {
  @Input() game: Game;
  images: Image[];
  state: string = 'small';
  imageIndex: number = 0;

  constructor() { }

  animateMe(): void {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  getImage(): Image {
    return this.game.images[this.imageIndex];
  }

  previousImage(): void {
    if(this.imageIndex != 0) {
      this.imageIndex--;
    }
  }

  nextImage(): void {
    if(this.imageIndex != this.game.images.length - 1) {
      this.imageIndex++;
    }
  }

  isDisabled(orientation: string): string {
    if(orientation === 'left') {
      if(this.imageIndex == 0) {
        return 'true';
      } else {
        return 'false';
      }
    } else {
      if(this.imageIndex == this.game.images.length - 1) {
        return 'true';
      } else {
        return 'false';
      }
    }
  }

  ngOnInit() {
    console.log('test ' + this.getImage());
  }

}
