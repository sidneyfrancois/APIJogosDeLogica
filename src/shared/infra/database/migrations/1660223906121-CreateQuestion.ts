import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuestion1660223906121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "questions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "enunciado",
            type: "varchar",
          },
          {
            name: "alternativas",
            type: "varchar",
          },
          {
            name: "resposta",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("questions");
  }
}
