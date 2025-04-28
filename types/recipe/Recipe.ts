import {Field, ObjectType, ID, Int, Float, Arg, registerEnumType} from "type-graphql";
import {Rate} from "../rating/Rate";
import {BaseType} from "../baseType";

export enum Category {
    VEG = "VEG",
    NON_VEG = "NON_VEG"
}

registerEnumType(Category, {name : "Category"});

@ObjectType({implements : BaseType})
export class Recipe extends BaseType{

    @Field(type => String)
    title:string;
    @Field( type => [Rate])
    ratings?: Rate[]
    @Field(type => Float, {description : "Average Rating", nullable : true})
    averageRating?: number;

    @Field(type => Category, {nullable : true, defaultValue : Category.VEG})
    category?: Category;

    @Field(type => Int, {nullable : true, defaultValue : 10})
    cost?(@Arg("quantity", type => Int) quantity: number) : number {
        return quantity * 100;
    }
}
