import { Genre } from './genre';
import { Platform } from './platform';
import {Publisher} from './publisher';
import {Image} from './image';
import {Review} from './review';

export class Game {
  constructor(
    public description: string,
    public expected_release_day: string,
    public expected_release_month: string,
    public expected_release_quarter: string,
    public expected_release_year, string,
    public id: number,
    public name: string,
    public platforms: Platform[],
    public genres: Genre[],
    public releaseDate: string,
    public image: Image,
    public images: Image[],
    public publishers: Publisher[],
    public reviews: Review[]) {
  }

  getReleaseDate(): string {
    return this.expected_release_year;
  }
}
