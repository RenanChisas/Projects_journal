import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Menu } from "../../Components/Menu";
import { Container } from "../../Components/Container";
import "github-markdown-css/github-markdown-light.css";
import styles from "./styles.module.css";
import { listProjects } from "../../Types/bd";
import { useSearchParams } from "react-router-dom";

export function JournalMD() {
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    let pwd = searchParams.get("project");

    // Verifica se o arquivo existe na lista
    if (!listProjects.some((item) => item.arqname === pwd)) {
      pwd = "semprojeto";
    }

    const carregarArquivo = async () => {
      try {
        const res = await fetch(`/${pwd}.md`);
        if (!res.ok) throw new Error("Arquivo não encontrado");
        const texto = await res.text();
        setContent(texto);
      } catch (error) {
        console.error("Erro ao carregar o conteúdo:", error);
        setContent("Erro ao carregar o conteúdo.");
      }
    };

    carregarArquivo();
  }, [searchParams]);

  return (
    <>
      <Menu />
      <Container>
        <div className={styles.background}>
          {/* Aplica o estilo do markdown apenas aqui */}
          <article className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </Container>
    </>
  );
}
