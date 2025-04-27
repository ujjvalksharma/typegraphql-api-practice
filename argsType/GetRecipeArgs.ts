import {ArgsType, Field, Int} from "type-graphql";

@ArgsType()
export class GetRecipeArgs {
    @Field(type => String, { nullable: true })
    titlePrefix: string;
    @Field(type => Int, { nullable: true })
    minRating: number;
}