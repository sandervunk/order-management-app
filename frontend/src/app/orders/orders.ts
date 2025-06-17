import { Component, inject, signal } from '@angular/core';
import { Search } from './search/search';
import { Results } from './results/results';
import { Api } from '../services/api';
import { Order, OrderSearchCriteria } from '../model/order.type';

@Component({
  selector: 'app-orders',
  imports: [Search, Results],
  templateUrl: './orders.html',
  standalone: true,
  styleUrl: './orders.scss',
})
export class Orders {
  api = inject(Api);
  orderItems = signal<Array<Order>>([]);

  handleSearch(criteria: OrderSearchCriteria) {
    this.api
      .getOrders(criteria)
      .subscribe((orders) => this.orderItems.set(orders));
  }
}
