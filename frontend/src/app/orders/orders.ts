import { Component, inject } from '@angular/core';
import { Search } from './search/search';
import { Results } from './results/results';
import { Api } from '../services/api';

@Component({
  selector: 'app-orders',
  imports: [Search, Results],
  templateUrl: './orders.html',
  standalone: true,
  styleUrl: './orders.scss',
})
export class Orders {
  api = inject(Api);

  handleSearch(criteria: {
    country?: string | null;
    description?: string | null;
  }) {
    this.api.getOrders(criteria).subscribe((orders) => console.log(orders));
  }
}
