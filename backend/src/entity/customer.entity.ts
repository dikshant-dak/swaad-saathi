
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer extends BaseEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ nullable: true })
  firstName!: string

  @Column({ nullable: true })
  lastName!: string

  @Column({ nullable: true })
  age!: number

  @Column({ nullable: true })
  email!: string

  @Column({ nullable: true })
  password!: string

  @Column({ nullable: true })
  phone!: string
}
