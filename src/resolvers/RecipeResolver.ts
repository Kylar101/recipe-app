import { Resolver, Mutation, InputType, Field, Int, Arg, Query } from 'type-graphql';
import { Recipe } from '../entity/Recipe';

@InputType()
class RecipeInput {
  @Field(() => Int)
  userId: number

  @Field()
  name: string

  @Field(() => Int)
  cookTime: number

  @Field(() => Int)
  serves: number

  @Field(() => String, { nullable: true })
  method?: string

  @Field(() => String, { nullable: true })
  notes?: string

  @Field(() => Int, { nullable: true })
  rating?: number

  @Field()
  lastUpdated: Date
}

@InputType()
class UpdateRecipeInput {
  @Field(() => Int, { nullable: true })
  userId?: number

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Int, { nullable: true })
  cookTime?: number

  @Field(() => Int, { nullable: true })
  serves?: number

  @Field(() => String, { nullable: true })
  method?: string

  @Field(() => String, { nullable: true })
  notes?: string

  @Field(() => Int, { nullable: true })
  rating?: number

  @Field()
  lastUpdated: Date
}

@Resolver()
export class RecipeResolver {
  @Mutation(() => Recipe)
  async createRecipe(@Arg('options', () => RecipeInput) options: RecipeInput) {
    const recipe = await Recipe.create(options).save();
    return recipe;
  }

  @Mutation(() => Boolean)
  async updateRecipe(
  @Arg('id', () => Int) id: number,
    @Arg('options', () => UpdateRecipeInput) options: UpdateRecipeInput
  ) {
    await Recipe.update({ id }, options);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteRecipe(@Arg('id', () => Int) id: number) {
    await Recipe.delete({ id });
    return true;
  }

  @Query(() => [Recipe])
  recipes() {
    return Recipe.find({ relations: ['user'] });
  }

  @Query(() => Recipe)
  recipe(@Arg('id', () => Int) id: number) {
    return Recipe.findOne<Recipe>(id);
  }
}