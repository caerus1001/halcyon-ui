import { Genre } from './genre';

export class Review {
    id: number;
    title: string;
    releaseDate: Date;
    genre: Genre;
}