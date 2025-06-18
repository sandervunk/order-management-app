import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    let params = new HttpParams();

    Object.entries(criteria).forEach(([key, value]) => {
      if (value) {
        params = params.set(key, value);
      }
    });

    return this.http.get<Array<Order>>(environment.apiUrl + '/orders', {
      params,
    });
  }

  postOrder(order: Omit<Order, 'id'>) {
    return this.http.post<Order>(environment.apiUrl + '/orders', order);
  }
}
