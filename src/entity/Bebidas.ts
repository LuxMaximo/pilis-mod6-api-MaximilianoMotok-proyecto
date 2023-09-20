import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, OneToOne, JoinColumn, OneToMany, Double } from "typeorm";

@Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
export class Bebida extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    litro: string;

    @Column()
    precio: Number;

}