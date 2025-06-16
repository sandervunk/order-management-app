import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Api {
  http = inject(HttpClient);

  getOrders(criteria: {
    country?: string | null;
    description?: string | null;
  }) {
    return this.http.get<Array<unknown>>(environment.apiUrl + '/orders');
  }
}
