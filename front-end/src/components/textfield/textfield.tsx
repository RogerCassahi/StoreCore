import { InputHTMLAttributes, ReactElement } from "react";
import styles from "./styles.module.scss";

type TextfieldProps = {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
  prefix?: ReactElement;
  suffix?: ReactElement;
  error?: string;
};

export const Textfield = ({
  label,
  error,
  input,
  prefix,
  suffix,
}: TextfieldProps) => {
  return (
    <div className={styles["textfield"]}>
      <label className={styles["textfield_label"]}>{label}</label>
      <div
        className={
          error ? styles["textfield_box-error"] : styles["textfield_box"]
        }
      >
        {prefix && prefix}
        <input {...input} className={styles["textfield_box-input"]} />
        {suffix && suffix}
      </div>
      <span className={styles["textfield_error"]}>{error}</span>
    </div>
  );
};
