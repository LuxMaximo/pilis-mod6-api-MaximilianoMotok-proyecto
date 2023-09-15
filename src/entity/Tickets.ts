import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Pedido } from "./Pedidos";
import { Usuario } from './Usuarios'

@Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
export class Ticket extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pedido: Pedido;

    @Column()
    usuario: Usuario;

    @CreateDateColumn()
    fechaCompra: Date;

    @Column({ default: false })
    devuelto: boolean;

}