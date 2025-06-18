import { ConflictException, Injectable, PipeTransform } from '@nestjs/common';
import { OrdersService } from '../../orders.service';
import { Order } from '../../entities/order.entity';

@Injectable()
export class UniqueOrderNumberPipe implements PipeTransform {
  constructor(private readonly ordersService: OrdersService) {}

  async transform(value: Order) {
    const order = await this.ordersService.findByOrderNumber(value.orderNumber);

    if (order) {
      throw new ConflictException(
        'An order with given order number already exists!',
      );
    }

    return value;
  }
}
