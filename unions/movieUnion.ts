import {createUnionType} from "type-graphql"
import {Movie} from "../inputTypes/movies"
import {Actor} from "../inputTypes/actors"


export const MovieUnion = createUnionType({
    name: "MovieUnion",
    types: () => [Movie, Actor] as const,
})

