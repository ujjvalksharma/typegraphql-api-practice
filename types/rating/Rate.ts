import {Field, ObjectType, Int, InputType} from "type-graphql";

@ObjectType()
@InputType("RateInput")
export class Rate {

    @Field(type => Int)
    value : number;
}