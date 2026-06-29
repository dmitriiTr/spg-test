import styles from "./index.module.scss";
type Props = {
  children: React.ReactNode;
};

export default function AnimatedContent({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
