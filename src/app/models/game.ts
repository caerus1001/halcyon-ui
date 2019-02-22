import { Review } from './review';
import { Genre } from './genre';
import { Platform } from './platform';
import { identifierModuleUrl } from '@angular/compiler';

export class Game {
    constructor(
        private id: number, 
        private title: string,
        private genre: Genre,
        private platfroms: Platform[]
        ) {
    }

    getId(): number {
        return this.id;
    }
}