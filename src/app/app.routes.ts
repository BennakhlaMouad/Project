import { Routes } from '@angular/router';
import { Parfums } from './parfums/parfums';
import { AddParfum } from './add-parfum/add-parfum';
import { UpdateParfum } from './update-parfum/update-parfum';
import { LoginComponent } from './login/login'; 
import { Forbidden } from './forbidden/forbidden'; 
import { parfumGuard } from './parfum-guard';
import { ListeGenres } from './liste-genres/liste-genres';

export const routes: Routes = [
  { path: 'parfums', component: Parfums },
  { path: 'add-parfum', component: AddParfum, canActivate: [parfumGuard] },
  { path: 'updateParfum/:id', component: UpdateParfum, canActivate: [parfumGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: Forbidden },
  { path: 'listeGenres', component: ListeGenres, canActivate: [parfumGuard] },
  { path: '', redirectTo: 'parfums', pathMatch: 'full' }
];