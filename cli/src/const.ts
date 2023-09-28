export const TomatoVersion = "0.0.1";
export const PublicServerUrl = "http://localhost:8080";
export const PublicServerUrlEnvKey = "TOMATO_PUBLIC_SERVER_URL";
export const TomatoDirName = ".tomato";
export const TomatoDirPath = `${Deno.env.get("HOME")}/${TomatoDirName}`;
export const TomatoDirEnvKey = "TOMATO_DIR";
export const ConfigFileName = "config.json";
export const IndexFileName = "file_index.json";
