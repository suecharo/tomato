import { const_, utils } from "./mod.ts";

interface ConfigFile {
  cliVersion: typeof const_.TomatoVersion;
  publicServerUrl: typeof const_.PublicServerUrl;
}

export const ConfigFileTemplate = {
  cliVersion: const_.TomatoVersion,
  publicServerUrl: const_.PublicServerUrl,
};

export const configFilePath =
  `${utils.tomatoDirPath()}/${const_.ConfigFileName}`;

export async function loadConfigFile(): Promise<ConfigFile> {
  const content = await Deno.readTextFile(configFilePath);
  const json: ConfigFile = JSON.parse(content);
  return json;
}
