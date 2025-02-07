import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal') // Utilisation du type decimal pour les prix
  price: number;

  @Column()
  stock: number;

  @Column({ nullable: true })
  saled: number;

  @Column()
  urlimage: string;
}
