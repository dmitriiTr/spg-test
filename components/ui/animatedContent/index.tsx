import styles from "./index.module.scss";
type Props = {
  children: React.ReactNode;
};

export default function AnimatedText({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
