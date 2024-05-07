import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Items } from "./items.entity";
import { Order } from "./order.entity";
// import { Customer } from "./customer.entity";

@Entity()
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  orderId!: string

  @Column()
  quantity!: number

  @ManyToOne(() => Order, city => city.orderItems)
  order!: Order

    @Column()
    itemsId!: string

  @ManyToOne(() => Items, city => city.orderItems)
  items!: Items

}