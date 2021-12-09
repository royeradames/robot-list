import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    "List all students"
    students: [Students!]!
  }
  "A student"
  type Students {
    id: ID!
    "The city of the student"
    city: String
    "The company of the student"
    company: String
    "The email of the student"
    email: String
    "The firstName of the student"
    firstName: String
    "The student's grade"
    grades: [String]
    "The lastName of the student"
    lastName: String
    "The student's picture"
    pic: String
    "The student's skill"
    skill: String
`;
export default typeDefs;
