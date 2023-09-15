import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";

@Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;
}