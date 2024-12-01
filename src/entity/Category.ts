import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  name: string = "";

  @ManyToMany(() => Post, (post) => post.categories)
  posts: Post[] = [];
}