import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParfumService } from '../services/parfum.service';
import { Genre } from '../model/genre.model';
import { UpdateGenre } from '../update-genre/update-genre';

@Component({
  selector: 'app-liste-genres',
  standalone: true,
  imports: [CommonModule, UpdateGenre],
  templateUrl: './liste-genres.html'
})
export class ListeGenres implements OnInit {
  genres!: Genre[];
  updatedGenre: Genre = {"idGenre": 0, "nomGenre": ""};
  ajout: boolean = true;

  constructor(private parfumService: ParfumService) {}

  ngOnInit(): void {
    this.chargerGenres();
  }

  chargerGenres() {
    this.genres = this.parfumService.listeGenres();
  }

  genreUpdated(gen: Genre) {
    console.log("Genre updated event", gen);
    if (this.ajout) {
      this.parfumService.ajouterGenre(gen);
    }
    // Reset the form for the next addition
    this.updatedGenre = {"idGenre": 0, "nomGenre": ""};
    this.ajout = true;
    this.chargerGenres();
  }

  updateGen(gen: Genre) {
    // We clone the object so editing the form doesn't instantly change the table before clicking Save
    this.updatedGenre = { ...gen }; 
    this.ajout = false;
  }
}