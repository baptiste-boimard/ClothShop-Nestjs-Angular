import { Entity, Column, PrimaryGeneratedColumn, IntegerType } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: IntegerType;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;
}
