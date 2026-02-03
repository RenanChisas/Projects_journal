import { Container } from "../../Components/Container";
import { ListJournal } from "../../Components/ListJournal";
import { Menu } from "../../Components/Menu";
//import { listProjects } from "../../Types/bd";
import data from "../../Types/bd.json";
import type { ItemJournalType } from "../../Types/itensJournal";

export function Projects() {
  const listProjects = data as ItemJournalType[];
  return (
    <>
      <Menu />
      <Container>
        <ListJournal itens={listProjects} />
      </Container>
    </>
  );
}
