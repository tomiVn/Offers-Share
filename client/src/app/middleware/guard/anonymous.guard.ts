import { CanActivateFn } from '@angular/router';
import { useAuthFn } from 'src/app/view/auth/config/use.auth';

export const anonymousGuard: CanActivateFn = (route, state) => {
  
  const useAuth          = useAuthFn();
  const authTokenService = useAuth.serviceToken;
  const toastr           = useAuth.toastr;

  const isToken          = authTokenService.checkToken();

  if (!isToken) {

    return true;
  }

  toastr.info('Please log out first!', '[ Already exist user! ]');
  
  return false;
};
