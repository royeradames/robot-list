import React from "react";
import styles from "./student.module.scss";
import { StudentType } from "../App";

export default function definStudent({ student }: { student: StudentType }) {
  return (
    <article key={student.id} className={styles.student}>
      <img
        src={student.pic}
        alt={student.firstName}
        className={styles["student-pic"]}
      />
      <h1 className={styles["student-name"]}>
        {student.firstName} {student.lastName}
      </h1>
      <p className={`${styles["student-info"]} ${styles["student-email"]}`}>
        Email: {student.email}
      </p>
      <p className={`${styles["student-info"]} ${styles["student-company"]}`}>
        Company: {student.company}
      </p>
      <p className={`${styles["student-info"]} ${styles["student-skill"]}`}>
        Skill: {student.skill}
      </p>
      <p className={`${styles["student-info"]} ${styles["student-average"]}`}>
        Average: {student.average}
      </p>
    </article>
  );
}
