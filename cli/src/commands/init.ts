import { const_, utils } from "../mod.ts";

const ConfigTemplate = {
  cliVersion: const_.TomatoVersion,
  publicServerUrl: const_.PublicServerUrl,
};
const IndexTemplate = {};

// TODO dir path as argument
// TODO public server url as argument
export async function init(): Promise<void> {
  const dirPath = utils.tomatoDirPath();
  await Deno.mkdir(dirPath, { recursive: true });

  const configFilePath = `${dirPath}/${const_.ConfigFileName}`;
  const config = Object.assign({}, ConfigTemplate);
  await Deno.writeTextFile(configFilePath, JSON.stringify(config, null, 2));

  const indexFilePath = `${dirPath}/${const_.IndexFileName}`;
  const index = Object.assign({}, IndexTemplate);
  await Deno.writeTextFile(indexFilePath, JSON.stringify(index, null, 2));
}
