import "reflect-metadata";
import {startStandaloneServer} from "@apollo/server/standalone";
import {ApolloServer} from "@apollo/server";
import {buildSchema} from "type-graphql";
import {HealthResolver} from "./resolvers/health/health";

async function bootstrap() : Promise<void> {
    const schema = await buildSchema({
        resolvers : [HealthResolver]
    });
    const server = new ApolloServer({schema});
    const {url} = await startStandaloneServer(server, {listen : { port : 4000}});
    console.log("listening on " + url + "");
}

bootstrap();

