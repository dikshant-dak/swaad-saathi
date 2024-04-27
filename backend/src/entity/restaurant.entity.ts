import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { City } from './city.entity';

@Entity()
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  img!: string;

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  description!: string;

  @Column()
  rating!: number;

  @Column()
  cityId!: string;

  // @Column()
  @ManyToOne(() => City, city => city.restaurants)
  city!: City;
}


