import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@Entity()
export class City extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  cityName!: string;

  // @Column()
  @OneToMany(() => Restaurant, restaurant => restaurant.city)
  restaurants!: Restaurant[];
}


