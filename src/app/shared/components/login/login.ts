import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxBackgroundBeamsComponent } from "@omnedia/ngx-background-beams";
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgxHighlighterComponent } from "@omnedia/ngx-highlighter";

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

}
