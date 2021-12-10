import React from "react";
import { useQuery, gql } from "@apollo/client";
import "../sass/index.scss";
import ErrorHandler from "../component/errorHandler/errorHandler";
import Spinner from "../component/spinner/spinner";

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
export type Student = {
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
      <main className="App">
        {data.students.map((student: Student) => {
          return (
            <article key={student.id} className="student">
              <img
                src={student.pic}
                alt={student.firstName}
                className="student-pic"
              />
              <h1 className="student-name">
                {student.firstName} {student.lastName}
              </h1>
              <p className="student-info">Email: {student.email}</p>
              <p className="student-info">Company: {student.company}</p>
              <p className="student-info">Skill: {student.skill}</p>
              <p className="student-info">Average: {student.average}</p>
            </article>
          );
        })}
      </main>
    );
  }
  // handle loading state
  else return <Spinner />;
}

export default App;
