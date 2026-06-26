import styles from "./page.module.scss";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import CallbackForm from "@/components/sections/form";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <CallbackForm />
      </main>
    </div>
  );
}
