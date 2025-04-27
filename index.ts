import "reflect-metadata";
import {startStandaloneServer} from "@apollo/server/standalone";
import {ApolloServer} from "@apollo/server";
import {buildSchema} from "type-graphql";
import {HealthResolver} from "./resolvers/health/HealthResolver";
import {RecipeResolver} from "./resolvers/recipe/RecipeResolver";

async function bootstrap() : Promise<void> {
    const schema = await buildSchema({
        resolvers : [HealthResolver, RecipeResolver]
    });
    console.log(JSON.stringify(schema));
    const server = new ApolloServer({schema});
    const {url} = await startStandaloneServer(server, {listen : { port : 4000}});
    console.log("listening on " + url + "");
}

bootstrap();

