import { Injectable } from '@angular/core';
import { Parfum } from '../model/parfum-model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class ParfumService {
  genres: Genre[];
  parfums: Parfum[];

  constructor() {
    this.genres = [
      { idGenre: 1, nomGenre: "Homme" },
      { idGenre: 2, nomGenre: "Femme" }
    ];

    this.parfums = [
      { idParfum: 1, nomParfum: 'Dior Sauvage', prixParfum: 300.600, dateCreation: new Date('2011-01-14'), genre: { idGenre: 1, nomGenre: "Homme" } },
      { idParfum: 2, nomParfum: 'Bleu de Chanel', prixParfum: 450, dateCreation: new Date('2010-12-17'), genre: { idGenre: 2, nomGenre: "Femme" } },
      { idParfum: 3, nomParfum: 'La Vie est Belle', prixParfum: 200.123, dateCreation: new Date('2020-02-20'), genre: { idGenre: 2, nomGenre: "Femme" } }
    ];
  }

  listeParfums(): Parfum[] { return this.parfums; }   
  ajouterParfum(prod: Parfum) { this.parfums.push(prod); }
  
  consulterParfum(id: number | string): Parfum {
    const found = this.parfums.find(p => p.idParfum.toString() === id.toString())!;
    return { ...found };
  }

  updateParfum(p: Parfum) {
    const index = this.parfums.findIndex(x => x.idParfum === p.idParfum);
    if (index > -1) { this.parfums[index] = p; }
  }

  supprimeP(prod: Parfum) {
    const index = this.parfums.indexOf(prod, 0);
    if (index > -1) { this.parfums.splice(index, 1); }
  }

  listeGenres(): Genre[] { return this.genres; }

  consulterGenre(id: number | string): Genre {
    return this.genres.find(g => g.idGenre.toString() === id.toString())!;
  }

  ajouterGenre(gen: Genre): Genre {
    // Generate a new ID automatically
    const newId = this.genres.length > 0 ? Math.max(...this.genres.map(g => g.idGenre)) + 1 : 1;
    gen.idGenre = newId;
    this.genres.push(gen);
    return gen;
  }
}