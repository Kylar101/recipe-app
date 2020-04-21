import {MigrationInterface, QueryRunner} from 'typeorm';

export class InitalMigration1587467232678 implements MigrationInterface {
  name = 'InitalMigration1587467232678'

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL)', undefined);
    await queryRunner.query('CREATE TABLE "recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer)', undefined);
    await queryRunner.query('CREATE TABLE "ingredient" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "amount" varchar NOT NULL, "recipeId" integer)', undefined);
    await queryRunner.query('CREATE TABLE "shopping_list" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "date" datetime NOT NULL)', undefined);
    await queryRunner.query('CREATE TABLE "tag" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)', undefined);
    await queryRunner.query('CREATE TABLE "temporary_recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer, CONSTRAINT "FK_fe30fdc515f6c94d39cd4bbfa76" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)', undefined);
    await queryRunner.query('INSERT INTO "temporary_recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "recipe"', undefined);
    await queryRunner.query('DROP TABLE "recipe"', undefined);
    await queryRunner.query('ALTER TABLE "temporary_recipe" RENAME TO "recipe"', undefined);
    await queryRunner.query('CREATE TABLE "temporary_ingredient" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "amount" varchar NOT NULL, "recipeId" integer, CONSTRAINT "FK_a19a4b507b9e2d1efd2d73b37bc" FOREIGN KEY ("recipeId") REFERENCES "recipe" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)', undefined);
    await queryRunner.query('INSERT INTO "temporary_ingredient"("id", "name", "amount", "recipeId") SELECT "id", "name", "amount", "recipeId" FROM "ingredient"', undefined);
    await queryRunner.query('DROP TABLE "ingredient"', undefined);
    await queryRunner.query('ALTER TABLE "temporary_ingredient" RENAME TO "ingredient"', undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "ingredient" RENAME TO "temporary_ingredient"', undefined);
    await queryRunner.query('CREATE TABLE "ingredient" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "amount" varchar NOT NULL, "recipeId" integer)', undefined);
    await queryRunner.query('INSERT INTO "ingredient"("id", "name", "amount", "recipeId") SELECT "id", "name", "amount", "recipeId" FROM "temporary_ingredient"', undefined);
    await queryRunner.query('DROP TABLE "temporary_ingredient"', undefined);
    await queryRunner.query('ALTER TABLE "recipe" RENAME TO "temporary_recipe"', undefined);
    await queryRunner.query('CREATE TABLE "recipe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cookTime" integer NOT NULL, "serves" integer NOT NULL, "method" varchar NOT NULL, "notes" varchar NOT NULL, "rating" integer NOT NULL, "lastUpdated" datetime NOT NULL, "userId" integer)', undefined);
    await queryRunner.query('INSERT INTO "recipe"("id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId") SELECT "id", "name", "cookTime", "serves", "method", "notes", "rating", "lastUpdated", "userId" FROM "temporary_recipe"', undefined);
    await queryRunner.query('DROP TABLE "temporary_recipe"', undefined);
    await queryRunner.query('DROP TABLE "tag"', undefined);
    await queryRunner.query('DROP TABLE "shopping_list"', undefined);
    await queryRunner.query('DROP TABLE "ingredient"', undefined);
    await queryRunner.query('DROP TABLE "recipe"', undefined);
    await queryRunner.query('DROP TABLE "user"', undefined);
  }

}
