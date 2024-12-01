import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./Category";
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id = 0;
    @Column()
    title = "";
    @Column()
    content = "";
    @ManyToMany(() => Category, (category) => category.posts)
    @JoinTable()
    categories = [];
}
