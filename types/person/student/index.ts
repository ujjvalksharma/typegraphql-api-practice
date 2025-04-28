import {Field, Int, ObjectType} from "type-graphql";
import {Person} from "../index";

@ObjectType({ implements : Person})
export class Student extends Person {
    @Field(type => Int)
    grades: number;
}