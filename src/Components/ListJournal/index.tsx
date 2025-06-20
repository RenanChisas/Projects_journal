import { ItemJournal } from "../ItemJournal";
import styles from "./styles.module.css";
import type { ItemJournalType } from "../../Types/itensJournal";

type ListJournalProps = {
  itens: ItemJournalType[];
};

export function ListJournal({ itens }: ListJournalProps) {
  return (
    <ul className={styles.ul}>
      {itens
        .slice()
        .reverse()
        .map((projeto, index) => (
          <li className={styles.li} key={index}>
            <ItemJournal {...projeto} />
          </li>
        ))}
    </ul>
  );
}
