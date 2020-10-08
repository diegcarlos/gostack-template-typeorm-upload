import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export default class AddFkCategories1602123953963 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'transactions',
            new TableForeignKey({
                columnNames: ['category_id'],
                referencedTableName: 'categories',
                referencedColumnNames: ['id'],
                name: 'TransactionsCategory',
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('transactions', 'TransactionsCategory');
    }

}
