import { Genre } from './genre.model';
export class Parfum {
  idParfum!: number;
  nomParfum!: string;
  prixParfum!: number;
  dateCreation!: Date;
  genre!: Genre;
  
}