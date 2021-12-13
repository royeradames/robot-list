import React, { useEffect } from "react";
import styles from "./student.module.scss";
import { ReactComponent as PlusIcon } from "../../../assets/plus-solid.svg";
import { ReactComponent as MinusIcon } from "../../../assets/minus-solid.svg";
import { useForm } from "react-hook-form";
import { StudentType } from "../studentList";

/* define form input data */
export type TagData = {
  tags: string;
};
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
        className={setClass(["student-pic"])}
      />
      <h1 className={setClass(["student-name"])}>
        {student.firstName} {student.lastName}
      </h1>
      <button
        className={`${setClass(["student-expand-view-button"])} ${
          isToggle ? setClass(["student-expand-view-button-close"]) : ""
        }`}
        onClick={() => setIsToggle(!isToggle)}
      >
        {isToggle ? (
          <MinusIcon
            className={setClass(["student-expand-view-button-icon"])}
          />
        ) : (
          <PlusIcon className={setClass(["student-expand-view-button-icon"])} />
        )}
      </button>
      <article
        className={`${
          isToggle
            ? setClass(["student-expand-view-show"])
            : setClass(["student-expand-view-hide"])
        } ${setClass(["student-info", "student-grades"])}`}
      >
        {student?.grades?.map((grade: string, index: number) => (
          <p key={index}>{`Test ${index + 1}:   ${grade} %`}</p>
        ))}
      </article>
      <p className={setClass(["student-info", "student-email"])}>
        Email: {student.email}
      </p>
      <p className={setClass(["student-info", "student-company"])}>
        Company: {student.company}
      </p>
      <p className={setClass(["student-info", "student-skill"])}>
        Skill: {student.skill}
      </p>
      <p className={setClass(["student-info", "student-average"])}>
        Average: {student.average}
      </p>
    </article>
  );
}
