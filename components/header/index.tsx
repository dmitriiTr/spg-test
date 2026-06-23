import Menu from "./components/Menu";
import styles from "./index.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Menu />
    </header>
  );
}
