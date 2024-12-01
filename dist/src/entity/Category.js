import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Post } from "./Post";
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id = 0;
    @Column()
    name = "";
    @ManyToMany(() => Post, (post) => post.categories)
    posts = [];
}
