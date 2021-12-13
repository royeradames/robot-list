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
export default function Student({
  /* current student data in display */
  student: currentStudent,
  index: currentStudentIndex,
  /* general student list */
  students: studentList,
  setStudents: setStudentList,
}: {
  student: StudentType;
  index: number;
  students: StudentType[];
  setStudents: React.Dispatch<React.SetStateAction<StudentType[]>>;
}) {
  /* handle the toggle of grades */
  const [isToggle, setIsToggle] = React.useState(false);
  /* capture new tag string  */
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<TagData>();

  /* simplify the class set up for css module */
  type ConditonalClass = {
    conditon: boolean;
    class: string;
  };
  const setClass = (classes: (string | ConditonalClass)[]) => {
    return classes
      .map((className) => {
        if (typeof className === "object") {
          return className.conditon ? styles[className.class] : "";
        } else return styles[className];
      })
      .join(" ");
  };

  /* add tag string to the student tag field */
  const onSubmit = handleSubmit(({ tags: newTag }) => {
    setStudentList(
      studentList.map((student, StudentIndex) =>
        /* only add the tag if it doesn't already exist */
        StudentIndex === currentStudentIndex && !student.tags.includes(newTag)
          ? { ...student, tags: [...student.tags, newTag] }
          : student
      )
    );
  });

  /* reset input tag field when tag is added */
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  /* Display student information */
  return (
    <article className={setClass(["student"])}>
      <img
        src={currentStudent.pic}
        alt={currentStudent.firstName}
        className={setClass(["student-pic"])}
      />
      <h1 className={setClass(["student-name"])}>
        {currentStudent.firstName} {currentStudent.lastName}
      </h1>

      {/* when button is click it shows/hiddes */}
      <button
        className={setClass(["student-expand-view-button"])}
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

      {/* render grades */}
      <article
        className={`${setClass([
          "student-info",
          "student-grades",
          { conditon: !isToggle, class: "student-expand-view-hide" },
        ])}`}
      >
        {currentStudent?.grades?.map((grade: string, index: number) => {
          const testNumber = index + 1;
          return <p key={index}>{`Test ${testNumber}:   ${grade} %`}</p>;
        })}
      </article>
      <p className={setClass(["student-info", "student-email"])}>
        Email: {currentStudent.email}
      </p>
      <p className={setClass(["student-info", "student-company"])}>
        Company: {currentStudent.company}
      </p>
      <p className={setClass(["student-info", "student-skill"])}>
        Skill: {currentStudent.skill}
      </p>
      <p className={setClass(["student-info", "student-average"])}>
        Average: {currentStudent.average}%
      </p>

      {/* render tags when they exist */}
      <article className={setClass(["student-info", "student-tag-list"])}>
        {currentStudent.tags.map((tag: string, index: number) => (
          <p key={index} className={setClass(["student-tag-list-tag"])}>
            {tag}
          </p>
        ))}
      </article>
    </article>
  );
}
