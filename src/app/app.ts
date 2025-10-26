import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from "@angular/material/button"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('UiTos');

    private translateService = inject(TranslateService)

    constructor() {
        this.translateService.addLangs(["pt"])
        this.translateService.setFallbackLang('pt');
        this.translateService.use('pt');
    }
}
