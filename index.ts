import "reflect-metadata";
import {startStandaloneServer} from "@apollo/server/standalone";
import {ApolloServer} from "@apollo/server";
import {buildSchema} from "type-graphql";
import {HealthResolver} from "./resolvers/health/HealthResolver";
import {RecipeResolver} from "./resolvers/recipe/RecipeResolver";
import {MovieResolver} from "./resolvers/movie/MovieResolver";
import {PersonResolver} from "./resolvers/person";
import {Student} from "./types/person/student";
import {Teacher} from "./types/person/teacher";

async function bootstrap() : Promise<void> {
    const schema = await buildSchema({
        resolvers : [HealthResolver, RecipeResolver, MovieResolver, PersonResolver],
        orphanedTypes: [ Student, Teacher ],
    });
    console.log(JSON.stringify(schema));
    const server = new ApolloServer({schema});
    const {url} = await startStandaloneServer(server, {listen : { port : 4000}});
    console.log("listening on " + url + "");
}

bootstrap();

