import { Resolver, Mutation, Arg, Int, Query, InputType, Field } from 'type-graphql';
import { Ingredient } from '../entity/Ingredients';

@InputType()
class IngredientInput {
  @Field(() => Int)
  recipeId: number

  @Field()
  name: string

  @Field()
  amount: string
}

@InputType()
class UpdateIngredientInput {
  @Field(() => Int, { nullable: true })
  recipeId?: number

  @Field(() => String, { nullable: false })
  name?: string

  @Field(() => String, { nullable: false })
  amount?: string
}

@Resolver()
export class IngredientResolver {
  @Mutation(() => Ingredient)
  async createIngredient(@Arg('options', () => IngredientInput) options: IngredientInput) {
    const ingredient = await Ingredient.create(options).save();
    return ingredient;
  }

  @Mutation(() => Boolean)
  async updateIngredient(
  @Arg('id', () => Int) id: number,
    @Arg('options', () => UpdateIngredientInput) options: UpdateIngredientInput
  ) {
    await Ingredient.update({ id }, options);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteIngredient(@Arg('id', () => Int) id: number) {
    await Ingredient.delete({id});
    return true;
  }

  @Query(() => Ingredient)
  ingredients() {
    return Ingredient.find();
  }

  @Query(() => Ingredient)
  ingredient(@Arg('id', () => Int) id: number) {
    return Ingredient.findOne<Ingredient>(id);
  }
}