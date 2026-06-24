import styles from "./index.module.scss";

type Props = {
  text: string;
  variant?: "primary" | "seconday" | "text";
};

export default function Button(props: Props) {
  const { variant = "primary", text } = props;
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      <div className={styles.textContainer}>
        <p className={styles.innerText}>{text}</p>
        <p className={styles.innerText}>{text}</p>
      </div>
    </button>
  );
}
