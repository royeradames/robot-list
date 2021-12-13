/* simplify the class set up for css module */
export type ConditonalClass = {
  conditon: boolean;
  class: string;
};

export default function innitSetClass(styles: {
  readonly [key: string]: string;
}) {
  return (classes: (string | ConditonalClass)[]) => {
    return classes
      .map((className) => {
        if (typeof className === "object") {
          return className.conditon ? styles[className.class] : "";
        } else return styles[className];
      })
      .join(" ");
  };
}
