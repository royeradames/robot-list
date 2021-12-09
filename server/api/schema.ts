import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    "List all students"
    students: [Students!]!
  }
`;
export default typeDefs;
