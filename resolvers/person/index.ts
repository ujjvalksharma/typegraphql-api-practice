import {Query, Resolver} from "type-graphql";
import {Person} from  "../../types/person"
import {Student} from "../../types/person/student";
import {Teacher} from "../../types/person/teacher";

const persons : Array<Student | Teacher> = [
    {   "id" : "student-1",
        "name": "Alice Johnson",
        "age": 20,
        "grades": 88
    },
    {  "id" : "teacher-1",
        "name": "Dr. Robert Smith",
        "age": 45,
        "salary": 65000
    }
];

@Resolver(of => Person)
export class PersonResolver {
    @Query(() => [Person])
    persons() : Person[] {
        return persons;
    }
}