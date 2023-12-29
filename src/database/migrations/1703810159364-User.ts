import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class User1703810159364 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'users',
                columns:[
                    {
                        name:'id_user',
                        type:'string',
                        isPrimary:true
                    },
                    {
                        name:'name_user',
                        type:'string',
                        isNullable:false
                    },
                    {
                        name:'email_user',
                        type:'string',
                        isNullable:false,
                        isUnique:true
                    },
                    {
                        name:'password_user',
                        type:'string',
                        isNullable:false,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
