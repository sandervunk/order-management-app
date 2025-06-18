import { Component, input } from '@angular/core';
import { Order } from '../../../model/order.type';
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

  getEstoniaOrders() {
    return this.orderItems()
      .filter(({ country }) => country === 'Estonia')
      .sort(this.sortByDueDate);
  }

  getOtherOrders() {
    return this.orderItems()
      .filter(({ country }) => country !== 'Estonia')
      .sort(this.sortByDueDate);
  }

  private sortByDueDate(a: Order, b: Order): number {
    return (
      new Date(a.paymentDueDate).getTime() -
      new Date(b.paymentDueDate).getTime()
    );
  }
}
