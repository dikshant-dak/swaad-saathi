import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Items } from "./items.entity";
import { OrderItem } from "./orderItems.entity";
import { Customer } from "./customer.entity";
// import { Customer } from "./customer.entity";

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  orderDate!: Date

  @Column()
  status!: string

  @Column()
  totalPrice!: number

  @Column({ type: 'text' })
  deliveryAddress!: string

  @Column()
  discountAmount!: number
  
  @OneToMany(() => OrderItem, items => items.order)
  orderItems!: OrderItem[]

  @Column()
  customerId!: string

  @ManyToOne(() => Customer, customer => customer.orders)
  customer!: Customer
}