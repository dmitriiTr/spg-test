import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";
import AnimatedContent from "../animatedContent";

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
      <AnimatedContent>{children}</AnimatedContent>
    </button>
  );
}
