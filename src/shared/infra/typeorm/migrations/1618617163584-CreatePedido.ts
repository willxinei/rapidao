import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreatePedido1618617163584 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pedidos',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'user_id',
                        type: 'uuid',
                    },

                    {
                        name: 'nome',
                        type: 'varchar',
                    },

                    {
                        name: 'preco',
                        type: 'integer',
                    },

                    {
                        name: 'quantidade',
                        type: 'integer',
                    },

                    {
                        name: 'adicional',
                        type: 'varchar',
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
            'pedidos',
            new TableForeignKey({
                name: 'Pedidos',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onUpdate: 'SET NULL',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'Pedidos');
        await queryRunner.dropTable('pedidos');
    }
}
