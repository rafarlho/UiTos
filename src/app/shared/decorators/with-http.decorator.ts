import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { ApiConfiguration } from "../../api";

export function WithHttp() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      http: HttpClient;
      apiUrl: string;

      constructor(...args: any[]) {
        super(...args);
        this.http = inject(HttpClient);
        this.apiUrl = inject(ApiConfiguration).rootUrl;
      }
    };
  };
}
