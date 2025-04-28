import {Field, Int, ObjectType} from "type-graphql";
import {Person} from "../index";

@ObjectType({ implements : Person})
export class Teacher extends Person {
    @Field(type => Int)
    salary: number;
}