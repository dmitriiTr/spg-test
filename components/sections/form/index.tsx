"use client";
import Button from "@/components/ui/button";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";

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
        <Button onClick={() => setClosing(true)} text="Закрыть" />
      </div>
      <h2>ЗАКАЗАТЬ ЗВОНОК</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Ваше Имя
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
            name="name"
          />
        </label>
        <label className={styles.label}>
          Телефон
          <IMaskInput
            type="tel"
            mask="+{7} (000) 000-00-00"
            unmask={true}
            placeholder="+7 (___) ___-__-__"
            onAccept={(value) => setPhone(value)}
            className={styles.input}
            required
            name="phoneNumber"
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
            name="email"
          />
        </label>
        <p className={styles.notice}>
          Нажимая на кнопку «Отправить», вы ознакомлены и подтверждаете согласие
          с{" "}
          <a className={styles.noticeLink} href="#">
            политикой обработки персональных данных
          </a>
        </p>
        <Button
          size="xl"
          type="submit"
          className={styles.button}
          text="ОТПРАВИТЬ"
        />
      </form>
    </section>
  );
}
