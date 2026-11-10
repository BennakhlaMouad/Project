import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parfum } from '../model/parfum-model';
import { Genre } from '../model/genre.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-update-parfum',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-parfum.html',
  styles: ``
})
export class UpdateParfum implements OnInit {
  currentParfum = new Parfum();
  genres!: Genre[];
  updatedGenreId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private parfumService: ParfumService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.currentParfum = this.parfumService.consulterParfum(id);
    
    this.genres = this.parfumService.listeGenres();
    this.updatedGenreId = this.currentParfum.genre.idGenre; 
  }

  updateParfum() {
    this.currentParfum.genre = this.parfumService.consulterGenre(this.updatedGenreId);
    this.parfumService.updateParfum(this.currentParfum);
    this.router.navigate(['parfums']);
  }
}