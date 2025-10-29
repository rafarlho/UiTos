import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxBackgroundBeamsComponent } from "@omnedia/ngx-background-beams";
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgxHighlighterComponent } from "@omnedia/ngx-highlighter";
import { Auth0ClientService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    NgxBackgroundBeamsComponent,
    NgxNeonUnderlineComponent,
    NgxFadeComponent,
    MatButtonModule,
    NgxHighlighterComponent
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly auth = inject(Auth0ClientService)
  private readonly router = inject(Router)
  handleLoginClick() {
    this.auth.loginWithPopup().then(()=> {
      console.log(this.auth.getUser().then((data)=> console.log(data)) )
      this.router.navigate(["home"])
    })
    .catch((reason: any) => {console.log(reason)})
  }
}
