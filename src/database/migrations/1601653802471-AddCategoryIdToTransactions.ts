import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddCategoryIdToTransactions1601653802471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'transactions',
            new TableColumn ({
                name: 'category_id',
                type: 'uuid',
                isNullable: true,
            })

        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        
        await queryRunner.dropColumn('transactions', 'category_id');
    }

}
