import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Order } from '../model/order.type';

@Injectable({
  providedIn: 'root',
})
export class Api {
  http = inject(HttpClient);

  getOrders(criteria: {
    country?: string | null;
    description?: string | null;
  }) {
    return this.http.get<Array<Order>>(environment.apiUrl + '/orders');
  }
}
