import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export function Menu() {
  const location = useLocation();

  function getClassName(path: string) {
    return location.pathname === path
      ? `${styles.a} ${styles.active}`
      : styles.a;
  }

  return (
    <div className={styles.menu}>
      <a href="/" className={getClassName("/")}>
        Projetos
      </a>
      <a href="/about" className={getClassName("/about")}>
        Sobre
      </a>
    </div>
  );
}
