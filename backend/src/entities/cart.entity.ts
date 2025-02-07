import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idProduct: number;

  @Column()
  idUser: number;

  @Column()
  quantity: number;

  @Column({ default: false })
  isValidate: boolean;

  @Column({ type: 'timestamp', nullable: true })
  createdat: Date;

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'idProduct' })
  product: Product;
}
