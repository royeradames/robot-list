import React, { useEffect, useState } from "react";
import ErrorHandler from "../../component/errorHandler/errorHandler";
import Spinner from "../../component/spinner/spinner";
import { useForm } from "react-hook-form";
import Student from "./student/student";
import styles from "./studentList.module.scss";
import axios from "axios";
/* incomeing data structure */
export type FetchStudentType = {
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

/* Student List type */
export interface StudentType extends FetchStudentType {
  average: number;
  tags: string[];
}

export type FilterData = {
  name: string;
  tag: string;
};

export default function StudentList(): JSX.Element {
  /* handle the student list data */
  const [studentList, setStudentList] = useState<StudentType[]>([]);
  /* handle the display of error message */
  const [error, setError] = useState(false);
  /* capture value of input and updates store in varible everytime input changes */
  const { register, watch } = useForm<FilterData>();
  const watchName = watch("name");
  const watchTag = watch("tag");
  /* gather student data from server */
  useEffect(() => {
    axios
      .get("https://api.hatchways.io/assessment/students")
      // unwrap student data
      .then((res) => res.data.students)
      /* save student data to state with new fields of averages and tags */
      .then((students) => {
        setStudentList(
          students.map((student: FetchStudentType) => {
            return {
              ...student,
              // calculate the average score
              average:
                student?.grades.reduce((a, b) => Number(a) + Number(b), 0) /
                  student?.grades.length || 0,
              // initialize the tags field
              tags: [],
            };
          })
        );
      })
      /* Set Handle Error when there is an error */
      .catch((_) => setError(true));
  }, []);

  const filterStudentsList = (
    watchName: string | undefined,
    watchTag: string | undefined
  ) => {
    function filterByName(student: StudentType, watchName: string = "") {
      const name = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`;
      return name.includes(watchName);
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
