import { MigrationInterface, QueryRunner, Table } from "typeorm";

// eslint-disable-next-line
export class userMigration1590889560341 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "serial",
                    isPrimary: true,
                    isUnique: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "birthdate",
                    type: "date"
                },
                {
                    name: "address",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "city",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "avatar",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "miles",
                    type: "integer",
                    default: 0,
                }
            ]
        }))
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("user");
    }

}
