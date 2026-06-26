import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
  variant?: "primary" | "seconday" | "text";
  size?: "xl" | "md";
};

export default function Button(props: Props) {
  const { variant = "primary", size = "md", text, ...rest } = props;
  return (
    <button
      {...rest}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    >
      <div className={styles.textContainer}>
        <p className={styles.innerText}>{text}</p>
        <p className={styles.innerText}>{text}</p>
      </div>
    </button>
  );
}
