import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quizes') // strickly mention the name of the table
export class Quiz extends BaseEntity {

  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier'
  })
  id: number

  @Column({
    type: 'varchar'
  })
  title: string

  @Column({
    type: 'text'
  })
  description: string

  @Column({
    type: 'boolean',
    default: 1
  })
  isActive: boolean

}
