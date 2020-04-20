import { Resolver, Mutation, Arg, Int, Query } from 'type-graphql';
import { Ingredient } from 'src/entity/Ingredients';

@Resolver()
export class IngredientResolver {
  @Mutation(() => Ingredient)
  async createIngredient(@Arg('name') name: string) {
    const ingredient = await Ingredient.create({name}).save();
    return ingredient;
  }

  @Mutation(() => Boolean)
  async updateIngredient(
  @Arg('id', () => Int) id: number,
    @Arg('name') name: string
  ) {
    await Ingredient.update({ id }, {name});
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