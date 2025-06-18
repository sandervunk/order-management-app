import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  linkId: string;

  @Column({ unique: true })
  orderNumber: number;

  @Column({ type: 'text' })
  paymentDescription: string;

  @Column({ type: 'text' })
  streetAddress: string;

  @Column({ type: 'text' })
  town: string;

  @Column({ type: 'text' })
  country: string;

  @Column()
  amount: number;

  @Column({ type: 'text' })
  currency: string;

  @Column({ type: 'date' })
  paymentDueDate: Date;
}
