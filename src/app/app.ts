import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from "@angular/material/button"
import { ApiConfiguration, organizationGetAllGet } from './api';
import { HttpClient } from '@angular/common/http';
import { WithHttp } from './core/decorators/with-http.decorator';

@WithHttp()
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
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

  ngOnInit(): void {
    organizationGetAllGet(this.http, this.apiUrl, { top: '10' }).subscribe({
      next: (response) => console.log('Organizations:', response),
      error: (error) => console.error('Erro:', error)
    });
  }
}
