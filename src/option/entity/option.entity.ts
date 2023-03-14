import { Question } from "src/question/entity/question.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('options')
export class Option extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar'
  })
  option: string;

  @Column({
    type: 'boolean'
  })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question
  
}