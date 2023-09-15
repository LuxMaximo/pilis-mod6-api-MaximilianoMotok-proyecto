import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, OneToOne, JoinColumn, OneToMany, Double } from "typeorm";

@Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
export class Comida extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    precio: Double;

}