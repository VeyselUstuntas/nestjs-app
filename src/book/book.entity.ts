import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:false})
    name : string

    @Column({type:"integer",nullable:false})
    pageCount : number;

    @Column({type:"varchar",nullable:false})
    content : string;
}