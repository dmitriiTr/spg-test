import styles from "./page.module.scss";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import SmoothScrollbarProvider from "@/components/scrollbarProvider";

export default function Home() {
  return (
    <div>
      <Header />
      <SmoothScrollbarProvider>
        <div className={styles.page}>
          <main className={styles.main}>
            <Hero />
            <About />
          </main>
        </div>
      </SmoothScrollbarProvider>
    </div>
  );
}
