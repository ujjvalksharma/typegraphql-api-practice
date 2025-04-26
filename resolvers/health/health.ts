// src/resolvers/HealthResolver.ts
import "reflect-metadata";           // ← must be first thing in your entry-point
import { Resolver, Query } from "type-graphql";

@Resolver()
export class HealthResolver {
    @Query(() => String)              // ← drop the “: StringConstructor” business
    async health(): Promise<string> { // ← this now matches the decorator signature
        return "OK";
    }
}
