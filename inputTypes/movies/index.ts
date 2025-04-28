import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class Movie {

    @Field(type => ID)
    movieId : number;

    @Field(type => String)
    title : String;

    @Field(type => String, {nullable : true})
    description? : String;
}