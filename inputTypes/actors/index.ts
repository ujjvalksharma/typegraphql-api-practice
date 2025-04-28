import {Field, ID, ObjectType, Int} from "type-graphql";

@ObjectType()
export class Actor {
  @Field(()=> String)
  name: string;

  @Field(type => Int)
  age: number;
}