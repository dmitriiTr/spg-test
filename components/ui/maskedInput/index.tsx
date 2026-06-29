import { InputHTMLAttributes, useId } from "react";
import styles from "../input/index.module.scss";
import { IMaskInput, ReactMaskProps } from "react-imask";

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  ReactMaskProps<HTMLInputElement> & {
    mask: string;
    label: string;
  };

export default function MaskedInput({ label, mask, ...props }: InputProps) {
  const id = useId();

  return (
    <div className={styles.field}>
      <IMaskInput {...props} mask={mask} className={styles.input} />

      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
