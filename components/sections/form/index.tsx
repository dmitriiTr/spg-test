"use client";
import Button from "@/components/ui/button";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import Input from "@/components/ui/input";
import MaskedInput from "@/components/ui/maskedInput";

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
      <div style={{ height: "40px" }}>
        <Button onClick={() => setClosing(true)}>Закрыть</Button>
      </div>
      <h2>ЗАКАЗАТЬ ЗВОНОК</h2>
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
          Нажимая на кнопку «Отправить», вы ознакомлены и подтверждаете согласие
          с{" "}
          <a className={styles.noticeLink} href="#">
            политикой обработки персональных данных
          </a>
        </p>
        <Button size="xl" type="submit" className={styles.button}>
          ОТПРАВИТЬ
        </Button>
      </form>
    </section>
  );
}
