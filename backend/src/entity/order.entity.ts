import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// import { Customer } from "./customer.entity";

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  orderDate!: Date

  @Column({ type: 'timestamp' })
  requiredDate!: Date

  @Column({ type: 'timestamp', nullable: true })
  shippedDate!: Date | null

  @Column({ type: 'varchar', length: 100 })
  status!: string

  @Column({ type: 'text', nullable: true })
  comments!: string | null

  @Column({ type: 'int' })
  customerNumber!: number

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice!: number

  @Column({ type: 'text' })
  deliveryAddress!: string

  @Column({ type: 'varchar', length: 50 })
  paymentMethod!: string

  @Column({ type: 'varchar', length: 50 })
  paymentStatus!: string

  @Column({ type: 'text', nullable: true })
  specialInstructions!: string | null

  @Column({ type: 'boolean', default: false })
  isGift!: boolean

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  discountAmount!: number | null

  @Column({ type: 'varchar', length: 20, nullable: true })
  discountCode!: string | null
}