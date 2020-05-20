import { ObjectType, Field, Int } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Recipe } from './Recipe';

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: string

  @Field(() => Recipe)
  @ManyToMany(_type => Recipe, recipe => recipe.tags)
  recipe: Recipe
}