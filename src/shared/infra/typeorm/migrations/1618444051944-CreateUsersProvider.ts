import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsersProvider1618444051944
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'providers',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },

                    {
                        name: 'nome_comercial',
                        type: 'varchar',
                    },

                    {
                        name: 'email',
                        type: 'varchar',
                    },

                    {
                        name: 'telefone_comercial',
                        type: 'integer',
                    },

                    {
                        name: 'rua',
                        type: 'varchar',
                    },

                    {
                        name: 'numero',
                        type: 'integer',
                    },

                    {
                        name: 'bairro',
                        type: 'varchar',
                    },

                    {
                        name: 'cidade',
                        type: 'varchar',
                    },

                    {
                        name: 'estado',
                        type: 'varchar',
                    },

                    {
                        name: 'CEP',
                        type: 'varchar',
                    },

                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('providers');
    }
}
