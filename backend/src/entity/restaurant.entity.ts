import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { City } from './city.entity'
import { Items } from './items.entity'

@Entity()
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  img!: string

  @Column()
  name!: string

  @Column()
  type!: string

  @Column()
  description!: string

  @Column()
  rating!: number

  @Column()
  cityId!: string

  // @Column()
  @ManyToOne(() => City, city => city.restaurants)
  city!: City

  @OneToMany(() => Items, items => items.restaurant)
  items!: Items[]
}
