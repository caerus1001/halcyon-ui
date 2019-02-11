import { Genre } from '../../models/genre';

export class Review {
    id: number;
    title: string;
    releaseDate: Date;
    genre: Genre;
}