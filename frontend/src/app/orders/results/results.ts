import { Component, input } from '@angular/core';
import { Order } from '../../model/order.type';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [DatePipe],
  templateUrl: './results.html',
  standalone: true,
  styleUrl: './results.scss',
})
export class Results {
  orderItems = input.required<Array<Order>>();
}
