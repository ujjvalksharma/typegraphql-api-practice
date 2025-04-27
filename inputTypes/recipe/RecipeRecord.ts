import {Field, InputType} from "type-graphql";

@InputType()
export class RecipeRecord {
    @Field(type => String)
    title: string;
}