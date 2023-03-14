import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt'

// when declaring the table, we can set default orderby 
@Entity({ name: 'users', orderBy: { name: 'ASC' } })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(password || this.password, salt);
  }
}