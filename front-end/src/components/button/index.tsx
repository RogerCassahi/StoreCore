import { ButtonHTMLAttributes, ReactElement } from "react";
import styles from "./styles.module.scss";

export type ButtonProps = {
  button: ButtonHTMLAttributes<HTMLButtonElement>;
  name: string;
  prefix?: ReactElement;
  suffix?: ReactElement;
  type: "primary" | "secondary" | "disabled" | "danger" | "text";
};

export const Button = ({ button, prefix, suffix, name, type }: ButtonProps) => {
  return (
    <button {...button} className={styles[`button_${type}`]}>
      {prefix && prefix}
      {name}
      {suffix && suffix}
    </button>
  );
};
