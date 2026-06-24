import Image from "next/image";
import MenuIcon from "@/public/menu.svg";
import LogoIcon from "@/public/logo1.svg";
import styles from "./index.module.scss";
import Button from "@/components/button";

export default function Menu() {
  return (
    <section className={styles.headerMenu}>
      <div className={styles.headerActions}>
        <div className={styles.menuButton}>
          <div className={styles.menuIcon}>
            <Image src={MenuIcon} fill priority alt={"Menu"} />
          </div>
          <span>МЕНЮ</span>
        </div>
        <Button text="ВЫБРАТЬ КВАРТИРУ" />
      </div>
      <div className={styles.logo}>
        <Image src={LogoIcon} fill priority alt={"Logo"} />
      </div>
      <div className={styles.phoneMenu}>
        <span>+7 495 527 21 21</span>
        <Button variant="text" text="ЗАКАЗАТЬ ЗВОНОК" />
      </div>
    </section>
  );
}
