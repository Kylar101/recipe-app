import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class InitialMigration1587415799649 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'User',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'password',
                    type: 'varchar'
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: 'Ingredient',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: 'Recipe',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'userId',
                    type: 'int'
                },
                {
                    name: 'cookTime',
                    type: 'int'
                },
                {
                    name: 'serves',
                    type: 'int'
                },
                {
                    name: 'method',
                    type: 'varchar'
                },
                {
                    name: 'notes',
                    type: 'varchar'
                },
                {
                    name: 'rating',
                    type: 'int'
                },
                {
                    name: 'lastUpdated',
                    type: 'date'
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('User');
        await queryRunner.dropTable('Ingredient');
        await queryRunner.dropTable('Recipe');
    }

}
