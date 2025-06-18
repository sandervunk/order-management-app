import { UniqueOrderNumberPipe } from './unique-order-number.pipe';
import { OrdersService } from '../../orders.service';

describe('UniqueOrderNumberPipe', () => {
  it('should be defined', () => {
    expect(new UniqueOrderNumberPipe({} as OrdersService)).toBeDefined();
  });
});
