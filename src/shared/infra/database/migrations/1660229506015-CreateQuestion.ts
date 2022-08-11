import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuestion1660229506015 implements MigrationInterface {
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
            name: "questionP_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKQuestionP",
            referencedTableName: "questionP",
            referencedColumnNames: ["id"],
            columnNames: ["questionP_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("questions");
  }
}
