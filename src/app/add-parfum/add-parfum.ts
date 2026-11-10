import { Component, OnInit } from '@angular/core';
import { Parfum } from '../model/parfum-model';
import { Genre } from '../model/genre.model';
import { ParfumService } from '../services/parfum.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-add-parfum',
  styleUrl: './add-parfum.css',
  templateUrl: './add-parfum.html',
})
export class AddParfum implements OnInit {
  newParfum = new Parfum();
  genres!: Genre[];
  newIdGenre!: number;

  constructor(private parfumService: ParfumService, private router: Router) {}

  ngOnInit() {
    this.genres = this.parfumService.listeGenres();
  }

  addParfum() {
    this.newParfum.genre = this.parfumService.consulterGenre(this.newIdGenre);
    this.parfumService.ajouterParfum(this.newParfum);
    this.router.navigate(['/parfums']);
  }
}