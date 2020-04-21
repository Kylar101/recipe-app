import { ObjectType, Int, Field } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { Ingredient } from './Ingredients';

@ObjectType()
@Entity()
export class Recipe extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(_type => User, user => user.recipes)
  user: User;

  @Field(() => Int)
  @Column()
  userId: number

  @Field()
  @Column()
  name: string

  @Field(() => Int)
  @Column()
  cookTime: number

  @Field(() => Int)
  @Column()
  serves: number

  @Field(() => String, {nullable: true})
  @Column()
  method: string

  @Field(() => String, {nullable: true})
  @Column()
  notes: string

  @Field(() => Int, {nullable: true})
  @Column()
  rating: number

  @Field()
  @Column()
  lastUpdated: Date

  @OneToMany(_type => Ingredient, ingredient => ingredient.recipeId)
  ingredients: Ingredient[]
}