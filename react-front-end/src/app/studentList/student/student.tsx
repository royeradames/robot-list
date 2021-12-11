import React from "react";
import styles from "./student.module.scss";
import { StudentType } from "../studentList";
import { ReactComponent as PlusIcon } from "../../../assets/plus-solid.svg";
import { ReactComponent as MinusIcon } from "../../../assets/minus-solid.svg";
export default function Student({ student }: { student: StudentType }) {
  const [isToggle, setIsToggle] = React.useState(false);

  const setClass = (classes: string[]) => {
    return classes.map((className) => styles[className]).join(" ");
  };
  return (
    <article className={setClass(["student", "student-expand-view-layout"])}>
      <img
        src={student.pic}
        alt={student.firstName}
        className={styles["student-pic"]}
      />
      <h1 className={styles["student-name"]}>
        {student.firstName} {student.lastName}
      </h1>
      <button
        className={`${styles["student-expand-view-button"]} ${
          isToggle ? styles["student-expand-view-button-close"] : ""
        }`}
        onClick={() => setIsToggle(!isToggle)}
      >
        {isToggle ? (
          <MinusIcon className={styles["student-expand-view-button-icon"]} />
        ) : (
          <PlusIcon className={styles["student-expand-view-button-icon"]} />
        )}
      </button>
      <article
        className={`${
          isToggle
            ? styles["student-expand-view-show"]
            : styles["student-expand-view-hide"]
        } ${styles["student-info"]} ${styles["student-grades"]}`}
      >
        {student?.grades?.map((grade: string, index: number) => (
          <p key={index}>{`Test ${index + 1}:   ${grade} %`}</p>
        ))}
      </article>
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
