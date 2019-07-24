import { Review } from './review';
import { Genre } from './genre';
import { Platform } from './platform';
import { identifierModuleUrl } from '@angular/compiler';

export class Game {
  constructor(
    public id: number,
    public title: string,
    public genre: string,
    public platforms: string[]) {
  }
}
