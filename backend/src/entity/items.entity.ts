import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Restaurant } from './restaurant.entity'
import { CartItems } from './cartItems.entity'
import { OrderItem } from './orderItems.entity'

@Entity()
export class Items extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column()
  price!: number

  @Column()
  img!: string

  @Column()
  type!: string

  @Column()
  description!: string

  @Column()
  restaurantId!: string

  @Column()
  rating!: number

  @ManyToOne(() => Restaurant, restaurant => restaurant.items)
  restaurant!: Restaurant

  @OneToMany(() => CartItems, items => items.items)
  cartItems!: CartItems[]

  @OneToMany(() => OrderItem, items => items.items)
  orderItems!: OrderItem[]


}
