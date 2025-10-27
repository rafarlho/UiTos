import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(), 
    provideAuth0({
      domain: 'dev-8d83f63muen50v2p.us.auth0.com',
      clientId: 'GWn4IlA7r1RXaErWaiyeWyJZNT9BfCGS',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://tos/api'  
      },
      // httpInterceptor: {
      //   allowedList: [
      //     {
      //       uri: 'https://localhost:44354/*',
      //       tokenOptions: {
      //         authorizationParams: {
      //           audience: 'https://tos/api' 
      //         }
      //       }
      //     }
      //   ]
      // }
    }),
    // provideHttpClient(withInterceptors([authHttpInterceptorFn])), 
    provideTranslateService({
        loader: provideTranslateHttpLoader({
            prefix: './i18n/',
            suffix: '.json'
        })
    })
            
  ]
};
