import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1588627960732 implements MigrationInterface {
    name = 'InitialMigration1588627960732'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL)`, undefined);
        await queryRunner.query(`CREATE TABLE "tag" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "recipeId" integer)`, undefined);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "userId" integer NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL)`, undefined);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "recipeId" integer NOT NULL, "name" varchar NOT NULL, "amount" varchar NOT NULL)`, undefined);
        await queryRunner.query(`CREATE TABLE "shopping_list" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "date" datetime NOT NULL)`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_tag" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "recipeId" integer, CONSTRAINT "FK_a9ecb25b2b9ff74ef9cf9bdd0a2" FOREIGN KEY ("recipeId") REFERENCES "recipe" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_tag"("id", "name", "recipeId") SELECT "id", "name", "recipeId" FROM "tag"`, undefined);
        await queryRunner.query(`DROP TABLE "tag"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_tag" RENAME TO "tag"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "userId" integer NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, CONSTRAINT "FK_fe30fdc515f6c94d39cd4bbfa76" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_recipe"("id", "userId", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated") SELECT "id", "userId", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated" FROM "recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_recipe" RENAME TO "recipe"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_ingredient" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "recipeId" integer NOT NULL, "name" varchar NOT NULL, "amount" varchar NOT NULL, CONSTRAINT "FK_a19a4b507b9e2d1efd2d73b37bc" FOREIGN KEY ("recipeId") REFERENCES "recipe" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_ingredient"("id", "recipeId", "name", "amount") SELECT "id", "recipeId", "name", "amount" FROM "ingredient"`, undefined);
        await queryRunner.query(`DROP TABLE "ingredient"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_ingredient" RENAME TO "ingredient"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "ingredient" RENAME TO "temporary_ingredient"`, undefined);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "recipeId" integer NOT NULL, "name" varchar NOT NULL, "amount" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "ingredient"("id", "recipeId", "name", "amount") SELECT "id", "recipeId", "name", "amount" FROM "temporary_ingredient"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_ingredient"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipe" RENAME TO "temporary_recipe"`, undefined);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "userId" integer NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "recipe"("id", "userId", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated") SELECT "id", "userId", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated" FROM "temporary_recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_recipe"`, undefined);
        await queryRunner.query(`ALTER TABLE "tag" RENAME TO "temporary_tag"`, undefined);
        await queryRunner.query(`CREATE TABLE "tag" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "recipeId" integer)`, undefined);
        await queryRunner.query(`INSERT INTO "tag"("id", "name", "recipeId") SELECT "id", "name", "recipeId" FROM "temporary_tag"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_tag"`, undefined);
        await queryRunner.query(`DROP TABLE "shopping_list"`, undefined);
        await queryRunner.query(`DROP TABLE "ingredient"`, undefined);
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
        await queryRunner.query(`DROP TABLE "tag"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
