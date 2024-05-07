import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Items } from './items.entity';
import { Customer } from './customer.entity';

@Entity()
export class CartItems extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  itemsId!: string;

  @Column()
  quantity!: number;

  @ManyToOne(() => Items, Items => Items.cartItems)
  items!: Items;

  @Column()
  customerId!: string;

  @ManyToOne(() => Customer, customer => customer.cartItems)
  customer!: Customer;
}


