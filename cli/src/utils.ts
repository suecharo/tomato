import { const_ } from "./mod.ts";

export function tomatoDirPath() {
  const envVal = Deno.env.get(const_.TomatoDirEnvKey);
  if (envVal) {
    return envVal;
  }
  return `${Deno.env.get("HOME")}/${const_.TomatoDirName}`;
}
