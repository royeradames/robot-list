import React from "react";
import styles from "./errorHandler.module.scss";

export default function ErrorHandler({ error }: { error: any }) {
  return (
    <article className={styles.error}>
      <h1 className={styles["error-title"]}>Error</h1>
      <p className={styles["error-message"]}>
        There was an error while getting the student information. Please try,
        again.
      </p>
    </article>
  );
}
