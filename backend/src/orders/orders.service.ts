import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
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

  async findAll(query: Partial<Order>) {
    const where: FindOptionsWhere<Order> = {};

    Object.entries(query).forEach(([key, value]) => {
      if (value) {
        where[key] = ILike(`%${value}%`);
      }
    });

    return await this.ordersRepository.find({ where });
  }

  async findOne(id: number) {
    const order = await this.ordersRepository.findOne({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException();
    }

    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.findOne(id);

    Object.assign(order, updateOrderDto);

    return await this.ordersRepository.update({ id }, order);
  }

  async remove(id: number) {
    const order = await this.findOne(id);

    return await this.ordersRepository.remove(order);
  }
}
