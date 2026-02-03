import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import type { ItemJournalType } from "./itensJournal.js";

const filePath = path.resolve("src/Types/bd.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function getToday(): string {
  const today = new Date();
  return today.toLocaleDateString("pt-BR");
}

function getNextId(data: ItemJournalType[]): number {
  if (data.length === 0) return 1;
  return Math.max(...data.map((item) => item.id)) + 1;
}

async function addJournal() {
  const file = fs.readFileSync(filePath, "utf-8");
  const data: ItemJournalType[] = JSON.parse(file);

  const title = await ask("Título: ");
  const description = await ask("Descrição: ");
  const arqname = await ask("Nome do arquivo: ");

  const item: ItemJournalType = {
    id: getNextId(data),
    title,
    date: getToday(),
    description,
    arqname,
  };

  data.push(item);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  
  rl.close();
}

addJournal();
