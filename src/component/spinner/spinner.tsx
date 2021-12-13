import React from "react";
import styles from "./spinner.module.scss";
import Loader from "react-loader-spinner";

// loading spinner for waiting for data to load

export default function Spinner() {
  return (
    <article className={styles["divLoader"]}>
      <Loader type="TailSpin" color="white" height={160} width={160} />
    </article>
  );
}
