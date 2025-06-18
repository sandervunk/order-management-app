import { Injectable, PipeTransform } from '@nestjs/common';
import { Order } from '../../entities/order.entity';
import { OrdersService } from '../../orders.service';

@Injectable()
export class GenerateLinkIdPipe implements PipeTransform {
  constructor(private readonly ordersService: OrdersService) {}

  async transform(value: Order) {
    if (!value.linkId) {
      value.linkId = await this.generateUniqueLinkId();
    }

    return value;
  }

  private async generateUniqueLinkId(): Promise<string> {
    const candidate = this.generateRandomAlphaNumericId().toUpperCase();
    const exists = await this.ordersService.findAll({
      linkId: candidate,
    });

    if (!exists) {
      return this.generateUniqueLinkId();
    }

    return candidate;
  }

  private generateRandomAlphaNumericId(): string {
    return Math.random().toString(36).substring(2, 8);
  }
}
