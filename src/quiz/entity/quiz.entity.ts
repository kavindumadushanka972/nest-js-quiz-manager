import { Question } from "src/question/entity/question.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[]

}
