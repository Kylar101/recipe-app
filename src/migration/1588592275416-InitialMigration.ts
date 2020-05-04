import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1588592275416 implements MigrationInterface {
    name = 'InitialMigration1588592275416'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer, CONSTRAINT "FK_fe30fdc515f6c94d39cd4bbfa76" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_recipe" RENAME TO "recipe"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_recipe" RENAME TO "recipe"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_recipe" RENAME TO "recipe"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer NOT NULL, CONSTRAINT "FK_fe30fdc515f6c94d39cd4bbfa76" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_recipe" RENAME TO "recipe"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "recipe" RENAME TO "temporary_recipe"`, undefined);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "temporary_recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_recipe"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipe" RENAME TO "temporary_recipe"`, undefined);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer)`, undefined);
        await queryRunner.query(`INSERT INTO "recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "temporary_recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_recipe"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipe" RENAME TO "temporary_recipe"`, undefined);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer, CONSTRAINT "FK_fe30fdc515f6c94d39cd4bbfa76" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "temporary_recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_recipe"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipe" RENAME TO "temporary_recipe"`, undefined);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer, CONSTRAINT "FK_fe30fdc515f6c94d39cd4bbfa76" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "temporary_recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_recipe"`, undefined);
    }

}
