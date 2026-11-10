import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-genre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-genre.html'
})
export class UpdateGenre implements OnInit {
  @Input() genre!: Genre;
  @Input() ajout!: boolean;
  @Output() genreUpdated = new EventEmitter<Genre>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateGenre ", this.genre);
  }

  saveGenre() {
    this.genreUpdated.emit(this.genre);
  }
}