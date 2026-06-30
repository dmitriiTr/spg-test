"use client";
import Button from "@/components/ui/button";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import Input from "@/components/ui/input";
import MaskedInput from "@/components/ui/maskedInput";
import CloseIcon from "@/public/CloseIcon.svg";

type Props = {
  closeForm: VoidFunction;
};

export default function Form({ closeForm }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [closing, setClosing] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log({ name, phone, email });
  };

  const handleAnimationEnd = () => {
    if (closing) {
      closeForm();
    }
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setClosing(true);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <section
      onAnimationEnd={handleAnimationEnd}
      className={`${styles.section} ${closing ? styles.closing : ""}`}
    >
      <div className={styles.closeButton} onClick={() => setClosing(true)}>
        <Image src={CloseIcon} fill priority alt={"Close"} />
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>ЗАКАЗАТЬ ЗВОНОК</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            name="name"
            label="Ваше Имя"
          ></Input>
          <MaskedInput
            label="Телефон"
            type="tel"
            mask="+{7} (000) 000-00-00"
            placeholder="+7 (___) ___-__-__"
            onAccept={(value) => setPhone(value)}
            required
            name="phoneNumber"
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
          />
          <p className={styles.notice}>
            Нажимая на кнопку «Отправить», вы ознакомлены <br /> и подтверждаете
            согласие с{" "}
            <a className={styles.noticeLink} href="#">
              политикой обработки персональных данных
            </a>
          </p>
          <Button size="xl" type="submit" className={styles.button}>
            ОТПРАВИТЬ
          </Button>
        </form>
      </div>
    </section>
  );
}
