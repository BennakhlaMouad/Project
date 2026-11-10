import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  
})
export class LoginComponent {
  user = new User();
  erreur = 0;

  constructor(private authService: AuthService, private router: Router) {}

  onLoggedin() {
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser) {
      this.router.navigate(['/parfums']);
    } else {
      this.erreur = 1;
    }
  }
}