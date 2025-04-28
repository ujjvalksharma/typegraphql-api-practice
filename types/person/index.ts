import {Field, InterfaceType, Int} from "type-graphql";
import {BaseType} from "../baseType";

@InterfaceType({resolveType:(value) => {
    if("grades" in value) {
        return "Student";
    }
    return "Teacher";
    }, implements: BaseType})
export abstract class Person extends BaseType{

    @Field(()=> String)
    name: string;
    @Field(()=> Int)
    age: number;
}