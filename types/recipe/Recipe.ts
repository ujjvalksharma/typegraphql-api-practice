import {Field, ObjectType, ID, Int, Float} from "type-graphql";
import {Rate} from "../rating/Rate";
import {IsOptional} from "class-validator";

@ObjectType()
export class Recipe {
    @Field(type => ID)
    id: string;
    @Field(type => String)
    title:string;
    @Field( type => [Rate])
    ratings?: Rate[]
    @Field(type => Float, {description : "Average Rating", nullable : true})
    averageRating?: number;
}