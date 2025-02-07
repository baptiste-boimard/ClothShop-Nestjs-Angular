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

  // Définition de la relation avec l'entité Product.
  // Le JoinColumn indique que la colonne 'idProduct' dans la table cart est utilisée pour la jointure.
  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'idProduct' })
  product: Product;
}
