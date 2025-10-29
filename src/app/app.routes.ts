import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
    {
        path:"", 
        pathMatch:'full', 
        redirectTo: 'home'},
    {
        path: "login",
        loadComponent: () => import('./features/login/login').then(c => c.Login)
    },
    {
        path: "home",
        canActivate: [authGuardFn],
        loadComponent: () => import('./features/home/home').then(c => c.Home)
    }
];
