import { Container } from "../../Components/Container";
import { ListJournal } from "../../Components/ListJournal";
import { Menu } from "../../Components/Menu";
import { listProjects } from "../../Types/bd";

export function Projects() {
  return (
    <>
      <Menu />
      <Container>
        <ListJournal itens={listProjects} />
      </Container>
    </>
  );
}
