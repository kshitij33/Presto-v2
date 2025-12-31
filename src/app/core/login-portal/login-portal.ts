import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-portal',
  imports: [],
  templateUrl: './login-portal.html',
  styleUrl: './login-portal.css',
})
export class LoginPortal {

  // constructor(private router: Router) {}
  router = inject(Router);

onRoleChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  if (value) {
    this.router.navigate([value]);
  }
}

}
