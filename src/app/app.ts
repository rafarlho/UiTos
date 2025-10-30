import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from "@angular/material/button"
import { HttpClient } from '@angular/common/http';
import { WithHttp } from './shared/decorators/with-http.decorator';
import { SidenavLayoutComponent } from "./shared/components/sidenav-layout/sidenav-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})  
@WithHttp()
export class App {
  protected readonly title = signal('UiTos');

  private translateService = inject(TranslateService)
  // private http = HttpClient

  http!: HttpClient;
  apiUrl!: string;
  
  constructor() {
    this.translateService.addLangs(['pt']);
    this.translateService.setFallbackLang('pt');
    this.translateService.use('pt');
  }
}
