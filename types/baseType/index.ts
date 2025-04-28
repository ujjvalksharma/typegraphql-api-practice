import {Field, InterfaceType, ID} from "type-graphql";

@InterfaceType()
export abstract class BaseType {

    @Field(type => ID)
    id : string
}