import Image from "next/image";
import styles from "./index.module.scss";
import AboutImage from "@/public/aboutImage.png";
import VideoPreviewImage from "@/public/videoPreviewImage.png";
import VideoPlayButtonSvg from "@/public/playButton.svg";
import VideoPlayCircleSvg from "@/public/videoPlayCircle.svg";
import LineIcon from "@/public/Line.svg";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.leftPart}>
        <p className={styles.aboutText}>О ПРОЕКТЕ</p>
        <div className={styles.aboutImage}>
          <Image src={AboutImage} fill alt="first" />
        </div>
      </div>
      <div className={styles.rightPart}>
        <div className={styles.lineContainer}>
          <div className={styles.line}>
            <Image src={LineIcon} fill priority alt={"Line"} />
          </div>
        </div>
        <div>
          <p className={styles.aboutDetailsText}>
            УЮТНОЕ И БЕЗОПАСНОЕ <br />
            ПРОСТРАНСТВО ДЛЯ СЧАСТЛИВОЙ <br />
            <span className={styles.textAccent}>
              СПОКОЙНОЙ И РАЗМЕРЕННОЙ <br />
              ЖИЗНИ
            </span>
          </p>

          <p className={styles.apartmentDetails}>
            <span className={styles.textAccent}>
              Квартиры от 65 до 356 м2 с чистовой отделкой,
            </span>{" "}
            <br />
            балконами, лоджиями и террасами В собственной <br />
            закрытой охраняемой территориИ.
          </p>

          <div className={styles.videoBlock}>
            <div>
              <p className={styles.videoText}>Видео о проекте</p>
              <p className={styles.videoLengthText}>1:25 минут</p>
            </div>
            <div className={styles.videoPreview}>
              <div className={styles.videoPlayButton}>
                <Image fill src={VideoPlayButtonSvg} alt="play" />
              </div>
              <div className={styles.videoCircleButton}>
                <Image fill src={VideoPlayCircleSvg} alt="playCircle" />
              </div>
              <div className={styles.videoPreviewImage}>
                <Image fill src={VideoPreviewImage} alt="preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
