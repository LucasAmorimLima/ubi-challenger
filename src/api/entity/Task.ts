import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from "./User";

@Entity()
export class Task {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    createAt: Date;

    @Column({ nullable: true })
    updateAt?: Date;

    @Column()
    description: string;

    @Column()
    term: Date;

    @Column()
    finalized: boolean;

    @Column({ nullable: true })
    dateFinalized: Date;
    
    @ManyToOne(() => User, (user) => user.task)
    user: User;
}
