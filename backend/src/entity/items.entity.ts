import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Restaurant } from './restaurant.entity'

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
}
