import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  img!: string;

  @Column()
  name!: string;

  @Column()
  type!: number;

  @Column()
  description!: string;

  @Column()
  rating!: string;
}


