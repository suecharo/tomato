import { const_, utils } from "./mod.ts";

interface File {
  hash: string;
  size: number;
  date: string;
}

interface Index {
  [url: string]: File;
}

interface IndexFile {
  files: Index;
}

export const IndexFileTemplate: IndexFile = {
  files: {},
};

export const indexFilePath = `${utils.tomatoDirPath()}/${const_.IndexFileName}`;

export async function loadIndexFile(): Promise<IndexFile> {
  const content = await Deno.readTextFile(indexFilePath);
  const json: IndexFile = JSON.parse(content);
  return json;
}

export async function loadIndex(): Promise<Index> {
  const indexFile = await loadIndexFile();
  return indexFile.files;
}
