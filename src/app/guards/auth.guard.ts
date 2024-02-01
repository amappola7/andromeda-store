import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.userIsAuthenticated() && authService.getUserRole() === 'admin') {
    return true;
  } else {
    return router.createUrlTree(['auth/login']);
  }
};
