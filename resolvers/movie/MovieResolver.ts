import {Resolver, Arg, Query} from "type-graphql";
import {Movie} from "../../inputTypes/movies";
import {Actor} from "../../inputTypes/actors";
import {MovieUnion} from "../../unions/movieUnion"



const movieDb : Movie[] = [
    {
        "movieId": 1,
        "title": "Inception",
        "description": "A thief who steals corporate secrets through dream-sharing technology."
    },
    {
        "movieId": 2,
        "title": "The Matrix",
        "description": null
    },
    {
        "movieId": 3,
        "title": "Interstellar",
        "description": "A team of explorers travel through a wormhole in space."
    }
];

const actorDb: Actor[] = [
    {
        "name": "Leonardo DiCaprio",
        "age": 48
    },
    {
        "name": "Keanu Reeves",
        "age": 60
    },
    {
        "name": "Matthew McConaughey",
        "age": 54
    }
];

@Resolver()
export class MovieResolver {

    @Query(returns => [MovieUnion])
    async search( @Arg("keyword", type => String, { nullable: true }) keyword: string) : Promise<(Actor | Movie)[]> {
        return [
            ...actorDb.filter(actor => actor.name.includes(keyword)),
            ...movieDb.filter(movie => movie.title.includes(keyword))
        ]
    }
}