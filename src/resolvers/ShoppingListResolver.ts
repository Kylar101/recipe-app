import { Resolver, Mutation, InputType, Field, Arg, Int, Query } from 'type-graphql';
import { ShoppingList } from '../entity/ShoppingList';

@InputType()
class ListInput {
  @Field()
  name: string

  @Field(() => Date)
  date: Date
}

@InputType()
class UpdateListInput {
  @Field(() => String, {nullable: true})
  name?: string

  @Field(() => Date, {nullable: true})
  date?: Date
}

@Resolver()
export class ShoppingListResolver {
  @Mutation(() => ShoppingList)
  async createShoppingList(
  @Arg('options', () => ListInput) options: ListInput
  ) {
    const list = await ShoppingList.create(options).save();
    return list;
  }

  @Mutation(() => Boolean)
  async updateShoppingList(
  @Arg('id', () => Int) id: number,
    @Arg('options', () => UpdateListInput) options: UpdateListInput
  ) {
    await ShoppingList.update({id}, options);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteShoppingList(@Arg('id', () => Int) id: number) {
    await ShoppingList.delete({id});
    return true;
  }

  @Query(() => [ShoppingList])
  shoppingLists() {
    return ShoppingList.find();
  }

  @Query(() => ShoppingList)
  shoppingList(@Arg('id', () => Int) id: number) {
    return ShoppingList.findOne<ShoppingList>(id);
  }
}