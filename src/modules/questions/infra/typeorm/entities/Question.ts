import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("questions")
class Question {
  @PrimaryColumn()
  id: string;

  @Column()
  enunciado: string;

  @Column("simple-array", { nullable: true })
  alternativas: string[];

  @Column()
  resposta: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Question };
