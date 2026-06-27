import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "seconday" | "text";
  size?: "xl" | "md";
};

export default function Button(props: Props) {
  const { variant = "primary", size = "md", children, ...rest } = props;
  return (
    <button
      {...rest}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    >
      <div className={styles.container}>
        <div className={styles.innerContent}>{children}</div>
        <div className={styles.innerContent}>{children}</div>
      </div>
    </button>
  );
}
