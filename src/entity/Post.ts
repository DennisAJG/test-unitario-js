import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  title: string = "";

  @Column()
  content: string = "";

  @ManyToMany(() => Category, (category: Category) => category.posts)
  @JoinTable()
  categories: Category[] = [];
}