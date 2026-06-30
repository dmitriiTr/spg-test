"use client";
import Image from "next/image";
import MenuIcon from "@/public/menu.svg";
import LogoIcon from "@/public/logo1.svg";
import styles from "./index.module.scss";
import Button from "@/components/ui/button";
import Form from "@/components/sections/form";
import { useState } from "react";
import { createPortal } from "react-dom";
import Select from "@/components/ui/select";
import { PhoneButton } from "../PhoneButton";

const options = [
  { value: "Квартира 1", label: "Квартира 1" },
  { value: "Квартира 2", label: "Квартира 2" },
  { value: "Квартира 3", label: "Квартира 3" },
];

export default function Menu() {
  const [formOpen, setformOpen] = useState(false);

  return (
    <section className={styles.headerMenu}>
      <div className={styles.headerActions}>
        <div className={styles.menuButton}>
          <div className={styles.menuIcon}>
            <Image src={MenuIcon} fill priority alt={"Menu"} />
          </div>
          <span>МЕНЮ</span>
        </div>
        <div className={styles.selectContainerLg}>
          <Select options={options} placeholder="ВЫБРАТЬ КВАРТИРУ" />
        </div>
      </div>
      <div className={styles.phoneMenuSmLeft}>
        <PhoneButton onClick={() => setformOpen(true)} />
      </div>
      <div className={styles.logo}>
        <Image src={LogoIcon} fill priority alt={"Logo"} />
      </div>
      <div className={styles.selectContainerSm}>
        <Select options={options} placeholder="ВЫБРАТЬ КВАРТИРУ" />
      </div>
      <div className={styles.phoneMenu}>
        <span className={styles.phoneNumber}>+7 495 527 21 21</span>
        <Button onClick={() => setformOpen(true)}>ЗАКАЗАТЬ ЗВОНОК</Button>
      </div>
      <div className={styles.phoneMenuSm}>
        <PhoneButton onClick={() => setformOpen(true)} />
      </div>
      {formOpen &&
        createPortal(
          <Form closeForm={() => setformOpen(false)} />,
          document.body,
        )}
    </section>
  );
}
