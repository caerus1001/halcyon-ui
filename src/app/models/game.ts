import { Review } from './review';
import { Genre } from './genre';

export class Game {
    constructor(
        public id: number, 
        private title: string,
        private genre: Genre,
        ) {
    }
}