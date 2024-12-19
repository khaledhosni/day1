import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from './service/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthServiceService); // Inject AuthService
  const router = inject(Router);
  
  
  if (authService.isLoggedIn()) {
    return true;
  }else{

    router.navigate(['/login']);
  }

  return true;
};
