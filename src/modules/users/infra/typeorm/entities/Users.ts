import { Exclude } from 'class-transformer';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telefone: number;

    @Column()
    @Exclude()
    password: string;

    @Column()
    rua: string;

    @Column()
    numero: number;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    CEP: number;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // @Expose({ name: 'avatar_url' })
    // getAvatarUrl(): string | null {
    //     return this.avatar
    //         ? `${process.env.APP_API_URL}/file/${this.avatar}`
    //         : null;
    // }
}

export default User;
