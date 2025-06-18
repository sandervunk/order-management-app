import { GenerateLinkIdPipe } from './generate-link-id.pipe';
import { OrdersService } from '../../orders.service';

describe('GenerateLinkIdPipe', () => {
  it('should be defined', () => {
    expect(new GenerateLinkIdPipe({} as OrdersService)).toBeDefined();
  });
});
