import Image from "next/image";
import styles from "./index.module.scss";
import PhoneIcon from "@/public/phone.svg";

type Props = {
  onClick: VoidFunction;
};

export function PhoneButton({ onClick }: Props) {
  return (
    <div onClick={onClick} className={styles.phoneButton}>
      <div className={styles.phoneImage}>
        <Image src={PhoneIcon} alt="Phone" />
      </div>
    </div>
  );
}
