import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Parfum } from '../model/parfum-model';
import { Genre } from '../model/genre.model';
import { ParfumService } from '../services/parfum.service';
import { AuthService } from '../services/auth.service'; // Added

@Component({
  selector: 'app-parfums',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './parfums.html',
  styleUrl: './parfums.css'
})
export class Parfums implements OnInit {
  parfums: Parfum[];
  tousLesParfums: Parfum[]; 
  genres!: Genre[];
  
  idGenreRecherche!: number;
  nomParfumRecherche: string = '';

  // Injected public authService here
  constructor(private parfumService: ParfumService, public authService: AuthService) {
    this.parfums = this.parfumService.listeParfums();
    this.tousLesParfums = this.parfums;
  }

  ngOnInit() {
    this.genres = this.parfumService.listeGenres();
  }

  onChange() {
    if (this.idGenreRecherche) {
      this.parfums = this.tousLesParfums.filter(p => p.genre.idGenre == this.idGenreRecherche);
    } else {
      this.parfums = this.tousLesParfums;
    }
  }

  rechercherParNom() {
    if (this.nomParfumRecherche) {
      this.parfums = this.tousLesParfums.filter(p => 
        p.nomParfum.toLowerCase().includes(this.nomParfumRecherche.toLowerCase())
      );
    } else {
      this.parfums = this.tousLesParfums;
    }
  }

  supprimeParfum(P: Parfum) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer ce parfum ?");
    if (conf) {
      this.parfumService.supprimeP(P);
      this.tousLesParfums = this.parfumService.listeParfums();
      
      if (this.nomParfumRecherche) {
        this.rechercherParNom();
      } else if (this.idGenreRecherche) {
        this.onChange();
      } else {
        this.parfums = this.tousLesParfums;
      }
    }
  }
}