import React from "react";
import { useQuery, gql } from "@apollo/client";
import "../sass/index.scss";
import ErrorHandler from "../component/errorHandler/errorHandler";
import Spinner from "../component/spinner/spinner";

export const GET_STUDENTS = gql`
  query getAllStudents {
    students {
      city
      company
      firstName
      email
      grades
      lastName
      pic
      skill
      id
    }
  }
`;
export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  company: string;
  skill: string;
  grades: number;
  pic: string;
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
            <div key={student.id}>
              <h1>
                {student.firstName} {student.lastName}
              </h1>
              <img src={student.pic} alt={student.firstName} />
              <p>{student.email}</p>
              <p>{student.city}</p>
              <p>{student.company}</p>
              <p>{student.skill}</p>
              <p>{student.grades}</p>
            </div>
          );
        })}
      </main>
    );
  }
  // handle loading state
  else return <Spinner />;
}

export default App;
