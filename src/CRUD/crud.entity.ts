import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'first_crud_app'})
export class CRUD{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        length: 100,
        nullable: false 
    })
    title: string;
}