import React from "react";
import ErrorHandler from "../../component/errorHandler/errorHandler";
import Spinner from "../../component/spinner/spinner";
import { useForm } from "react-hook-form";
import Student from "./student/student";
import styles from "./studentList.module.scss";
import { useQuery, gql } from "@apollo/client";

export type StudentType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  skill: string;
  pic: string;
  grades: string[];
  average: number;
};
export type FormData = {
  name: string;
};
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
      grades
      average
    }
  }
`;

export default function StudentList(): JSX.Element {
  const { register, watch } = useForm<FormData>();
  const watchName = watch("name");

  const { error, data } = useQuery(GET_STUDENTS);
  const filterByName = (watchName: string | undefined) => {
    /*
      filter the list with the watchName value
      - if watchName is empty, show all the list
      - if watchName is not empty, filter the list with the watchName value
        - if the watchName value is in the firstName or lastName, show the student
    */
    if (watchName) {
      const filterStudent = data.students.filter((student: StudentType) => {
        const name = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`;
        return name.includes(watchName);
      });
      return filterStudent.map((student: StudentType) => {
        return <Student key={student.id} student={student} />;
      });
    } else {
      return data.students.map((student: StudentType) => {
        return <Student key={student.id} student={student} />;
      });
    }
  };

  // handle error
  if (error) <ErrorHandler error={error} />;
  // handle payload
  if (data) {
    return (
      <article className={styles["student-list"]}>
        <input
          {...register("name")}
          placeholder="Search by Name"
          className={styles["student-list-input"]}
        />
        {filterByName(watchName)}
      </article>
    );
  }
  // handle loading state
  else return <Spinner />;
}
