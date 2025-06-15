import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = this.ordersRepository.create();

    Object.assign(order, createOrderDto);

    return await this.ordersRepository.save(order);
  }

  async findAll() {
    return await this.ordersRepository.find();
  }

  async findOne(orderNumber: number) {
    const order = await this.ordersRepository.findOne({
      where: { orderNumber },
    });

    if (!order) {
      throw new NotFoundException();
    }

    return order;
  }

  async update(orderNumber: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.findOne(orderNumber);

    Object.assign(order, updateOrderDto);

    return await this.ordersRepository.update({ id: order?.id }, order);
  }

  async remove(orderNumber: number) {
    const order = await this.findOne(orderNumber);

    return await this.ordersRepository.remove(order);
  }
}
