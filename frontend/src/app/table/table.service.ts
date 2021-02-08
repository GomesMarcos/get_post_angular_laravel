import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  options = {
    headers: {
      key: '@56a9yRoC#M56y0tW',
    },
  };

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(`${environment.API_URL}getTeste`);
  }

  create(funcionario) {
    return this.http.post(
      `${environment.API_URL}postTeste`,
      funcionario,
      this.options
    );
  }
}
