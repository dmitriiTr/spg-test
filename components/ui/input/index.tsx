import { InputHTMLAttributes, useId } from "react";
import styles from "./index.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({ label, ...props }: InputProps) {
  const id = useId();

  return (
    <div className={styles.field}>
      <input id={id} className={styles.input} placeholder=" " {...props} />

      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
