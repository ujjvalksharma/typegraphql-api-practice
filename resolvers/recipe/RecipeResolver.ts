
import {Args, Arg, Query, Resolver, Mutation, Ctx, FieldResolver, Root} from "type-graphql";
import {Recipe} from "../../types/recipe/Recipe";
import {GetRecipeArgs} from "../../argsType/GetRecipeArgs";
import {RecipeRecord} from "../../inputTypes/recipe/RecipeRecord";
import {Context} from "node:vm";
import {Rate} from "../../types/rating/Rate";

const recipesData: Recipe[] = [
    {
        id: "rec-001",
        title: "Sweta Recipe",
        ratings: [
            { value: 5 },
            { value: 4 },
        ],
        averageRating : 1
    },
    {
        id: "rec-002",
        title: "Ujjval Recipe",
        ratings: [
            { value: 5 },
            { value: 4 },
        ],
        averageRating : 4
    }
];

@Resolver(() => Recipe)
export class RecipeResolver {

    @Query(() => [Recipe])
    async recipes() {
        return await recipesData;
    }

    @Query(type => Recipe, { nullable: true })
    async recipe(@Arg("id", type => String) id: string) {
        return await recipesData.find(recipe => recipe.id === id);
    }

    @Query(type => [Recipe], { nullable: true })
    async recipeSearch(@Args(type => GetRecipeArgs) args: GetRecipeArgs): Promise<Recipe[]> {
        const { titlePrefix, minRating } = args;
        return recipesData.filter(
            r => r.title.startsWith(titlePrefix) && r.averageRating! > minRating
        );
    }

    @Mutation(() => Recipe)
    async createRecipe(@Arg("recipeRecord", () => RecipeRecord) recipeRecord: RecipeRecord,
                       @Ctx() ctx:Context) : Promise<Recipe> {
        const newRecipe : Recipe = {
            ...recipeRecord,
            id : "recipe-"+recipesData.length,
            averageRating : 0,
            ratings : [],
        }
        recipesData.push(newRecipe);
        return newRecipe;
    }

    @Mutation(() => Recipe)
    async updateRecipeRating(@Arg("recipeId", type => String) recipeId: string,
                             @Arg("newRate", type => Rate) rate: Rate,
                              @Ctx() ctx:Context) : Promise<Recipe> {

        const recipe = recipesData.find(recipe => recipe.id === recipeId);
        recipe!.ratings!.push(rate);
        recipe!.averageRating = recipe!.ratings!.reduce((acc, curr) => acc + curr.value, 0) / recipe!.ratings!.length;
        return recipe!;
    }

    @FieldResolver(() => String)
    async cookName(@Root() recipe: Recipe) : Promise<string> {
        return "Ujjval Sharma"
    }
}