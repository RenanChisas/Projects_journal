import styles from "./styles.module.css";
import type { ItemJournalType } from "../../Types/itensJournal";

export function ItemJournal(itens: ItemJournalType) {
  const url = "/projects?project=";
  return (
    <>
      <div className={styles.title}>
        <h3>
          <a href={`${url}${itens.arqname}`}>{itens.title}</a>
        </h3>
        <h5>{itens.date}</h5>
      </div>
      <div className={styles.description}>
        <p className={styles.p}>{itens.description}</p>
      </div>
    </>
  );
}
