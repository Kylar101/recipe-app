import { ObjectType, Int, Field } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class Recipe extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

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
}