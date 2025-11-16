import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { UserStore } from '../../../stores/user.store';

export const evaluateSelectedOrgResolver: ResolveFn<boolean> = (route, state) => {
  const userStore  = inject(UserStore)
  const router = inject(Router)
  if(userStore.selectedOrg())
    return true;
  return router.navigate(["/home"])
};
