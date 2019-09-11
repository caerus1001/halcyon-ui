import { Genre } from './genre';
import { Platform } from './platform';
import {Publisher} from './publisher';
import {Image} from './image';

export class Game {
  constructor(
    public id: number,
    public name: string,
    public platforms: Platform[],
    public genres: Genre[],
    public releaseDate: string,
    public image: Image,
    public publisher: Publisher[]) {
  }
}
