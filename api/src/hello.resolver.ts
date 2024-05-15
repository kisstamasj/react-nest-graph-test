import { Args, Query } from '@nestjs/graphql';

export class HelloResolver {
  @Query(() => String)
  hello(@Args('name') name: string, @Args('age') age: number) {
    return `Hello ${name}! I'm ${age} years old`;
  }
}
