import { Component, input } from '@angular/core';
import { Order } from '../../model/order.type';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.html',
  standalone: true,
  styleUrl: './results.scss',
})
export class Results {
  orderItems = input.required<Array<Order>>();
}
