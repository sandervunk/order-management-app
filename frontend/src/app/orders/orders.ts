import { Component, inject, signal } from '@angular/core';
import { Search } from './search/search';
import { Results } from './results/results';
import { Api } from '../services/api';
import { Order, OrderSearchCriteria } from '../model/order.type';
import { Dialog } from '@angular/cdk/dialog';
import { AddNew } from './add-new/add-new';

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
  dialog = inject(Dialog);

  openModal() {
    this.dialog.open(AddNew, { disableClose: true });
  }

  handleSearch(criteria: OrderSearchCriteria) {
    this.api
      .getOrders(criteria)
      .subscribe((orders) => this.orderItems.set(orders));
  }
}
