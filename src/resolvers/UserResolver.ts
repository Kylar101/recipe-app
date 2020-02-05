import { Resolver, Mutation, Arg, Query, InputType, Field, Int } from 'type-graphql';
import { User } from '../entity/User';

@InputType()
class UserInput {
  @Field()
  name: string

  @Field()
  email: string
}

@InputType()
class UpdateUserInput {
  @Field(() => String, {nullable: true})
  name?: string

  @Field(() => String, {nullable: true})
  email?: string
}

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('options', () => UserInput) options: UserInput,
  ) {
    const user = await User.create(options).save()
    return user;
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg('id', () => Int) id: number,
    @Arg('options', () => UpdateUserInput) options: UpdateUserInput
  ) {
    await User.update({id}, options)
    return true
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

}