import { Resolver, Mutation, Arg, Int, Query } from 'type-graphql';
import { Tag } from 'src/entity/Tag';

@Resolver()
export class TagResolver {
  @Mutation(() => Tag)
  async createTag(@Arg('name') name: string) {
    const tag = await Tag.create({name}).save()
    return tag;
  }

  @Mutation(() => Boolean)
  async updateTag(
    @Arg('id', () => Int) id: number,
    @Arg('name') name: string
  ) {
    await Tag.update({ id }, {name})
    return true
  }

  @Mutation(() => Boolean)
  async deleteTag(@Arg('id', () => Int) id: number) {
    await Tag.delete({id})
    return true;
  }

  @Query(() => Tag)
  ingredients() {
    return Tag.find()
  }

  @Query(() => Tag)
  ingredient(@Arg('id', () => Int) id: number) {
    return Tag.findOne<Tag>(id)
  }
}