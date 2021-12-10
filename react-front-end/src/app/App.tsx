import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./App.scss";
import ErrorHandler from "../component/errorHandler/errorHandler";
import Spinner from "../component/spinner/spinner";
import Student from "./student/student";
export const GET_STUDENTS = gql`
  query getAllStudents {
    students {
      company
      firstName
      email
      lastName
      pic
      skill
      id
      average
    }
  }
`;
export type StudentType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  skill: string;
  pic: string;
  average: number;
};
function App() {
  const { error, data } = useQuery(GET_STUDENTS);
  // handle error
  if (error) return <ErrorHandler error={error} />;
  // handle payload
  else if (data) {
    return (
      <main className="app">
        <article className="student-list">
          {data.students.map((student: StudentType) => {
            return <Student student={student} />;
          })}
        </article>
      </main>
    );
  }
  // handle loading state
  else return <Spinner />;
}

export default App;
