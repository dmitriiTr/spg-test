import Image from "next/image";
import styles from "./index.module.scss";
import HeroImage from "@/public/heroImage.png";
import BigLogoIcon from "@/public/logo2.svg";

export default function Hero() {
  return (
    <section>
      <div className={styles.heroImage}>
        <Image src={HeroImage} fill alt="first" />
      </div>
      <div className={styles.pageContent}>
        <div className={styles.textContainer}>
          <p>
            ДОМ БИЗНЕС-КЛАССА <br />
            ДЛЯ ЦЕНИТЕЛЕЙ РОСКОШИ
          </p>
        </div>
        <div className={styles.logo}>
          <Image src={BigLogoIcon} fill priority alt={"Logo"} />
        </div>
      </div>
    </section>
  );
}
