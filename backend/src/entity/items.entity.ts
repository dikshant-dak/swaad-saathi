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

@Entity()
export class Items extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

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
}
