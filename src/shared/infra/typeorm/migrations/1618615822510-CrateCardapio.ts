import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CrateCardapio1618615822510 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cardapio',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'provider_id',
                        type: 'uuid',
                    },

                    {
                        name: 'imagem',
                        type: 'varchar',
                        isNullable: true,
                    },

                    {
                        name: 'ingrediente',
                        type: 'varchar',
                    },

                    {
                        name: 'preco',
                        type: 'integer',
                    },

                    {
                        name: 'categoria',
                        type: 'varchar',
                    },

                    {
                        name: 'adicional',
                        type: 'varchar',
                        isNullable: true,
                    },

                    {
                        name: 'preco_adicioal',
                        type: 'integer',
                    },

                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },

                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'cardapio',
            new TableForeignKey({
                name: 'CardapioUser',
                columnNames: ['provider_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'providers',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('providers', 'CardapioUser');
        await queryRunner.dropTable('cardapio');
    }
}
