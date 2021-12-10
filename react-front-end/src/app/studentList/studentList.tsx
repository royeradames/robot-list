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
      average
    }
  }
`;

export default function StudentList(): JSX.Element {
  const { register, watch } = useForm<FormData>();
  const watchName = watch("name");

  const { error, data } = useQuery(GET_STUDENTS);

  // handle error
  if (error) <ErrorHandler error={error} />;
  // handle payload
  if (data) {
    return (
      <article className={styles["student-list"]}>
        <input {...register("name")} placeholder="Search by Name" />
        {loadStudents(watchName)}
      </article>
    );
  }
  // handle loading state
  else return <Spinner />;
}
