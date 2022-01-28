import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Task } from "./Task";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: "users" | "adm";
    
    @OneToMany(() => Task, (task) => task.user,{
        cascade: true
    })
    task: Task[]

}

