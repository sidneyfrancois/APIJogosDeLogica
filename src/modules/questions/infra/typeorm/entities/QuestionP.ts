import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { Question } from "./Question";

@Entity("questionP")
class QuestionP {
  @PrimaryColumn()
  id?: string;

  @Column()
  titulo: string;

  @Column()
  enunciado: string;

  questoes: Question[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { QuestionP };
