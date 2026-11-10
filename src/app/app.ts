import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'ParfumProject';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    let isloggedin: string;
    let loggedUser: string;
    
    isloggedin = localStorage.getItem('isloggedIn')!;
    loggedUser = localStorage.getItem('loggedUser')!;
    
    if (isloggedin != "true" || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }

  onLogout() {
    this.authService.logout();
  }
}