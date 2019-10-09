import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/game';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Image} from '../../../models/image';
import {MatDialog} from '@angular/material';
import {PresentedImageComponent} from '../presented-image/presented-image.component';

@Component({
  selector: 'app-game-images',
  templateUrl: './game-images.component.html',
  styleUrls: ['./game-images.component.css'],
  animations: [
    trigger('gameImageExpansionAnimation', [
      state('small', style({
        width: 'calc(100vw/8)'
      })),
      state('large', style({
        width: '80vw',
        height: '650px'
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

  constructor(
    public dialog: MatDialog
  ) { }

  animateMe(image: Image): void {
    image.state = (image.state === 'small' || image.state == null) ? 'large' : 'small';
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

  openDialog(image: Image): void {
    this.dialog.open(PresentedImageComponent, {
      width: '550px',
      data: {image: image},
      panelClass: 'custom-presented-image-mat-dialog'
    });
  }

  ngOnInit() {
    console.log('test ' + this.getImage());
  }

}
