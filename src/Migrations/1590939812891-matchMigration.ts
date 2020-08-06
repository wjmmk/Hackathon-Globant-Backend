import { MigrationInterface, QueryRunner } from "typeorm";

// eslint-disable-next-line
export class matchMigration1590939812891 implements MigrationInterface {
    name = 'matchMigration1590939812891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "match" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "tradeId" numeric NOT NULL, "userAcceptsId" numeric NOT NULL, "tradeScore" numeric NOT NULL, "userScore" numeric NOT NULL, CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "trader" ("id" SERIAL NOT NULL, "status" text NOT NULL, "service" text NOT NULL, "concurrence" boolean NOT NULL, "userAskingId" text NOT NULL, "trade" text NOT NULL, CONSTRAINT "PK_df56e1de40d8c60969618e82b67" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "trader"`);
        await queryRunner.query(`DROP TABLE "match"`);
    }

}
