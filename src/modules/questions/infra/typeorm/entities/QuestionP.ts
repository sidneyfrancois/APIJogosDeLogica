import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("specifications")
class QuestionP {
  @PrimaryColumn()
  id?: string;

  @Column()
  titulo: string;

  @Column()
  enunciado: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { QuestionP };
