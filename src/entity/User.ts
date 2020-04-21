import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { Recipe } from './Recipe';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  email: string

  @Field()
  @Column()
  password: string

  @OneToMany(_type => Recipe, recipe => recipe.user)
  recipes: Recipe[];
}