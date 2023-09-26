export * as args from "./args.ts";
export * as const_ from "./const.ts";
export * as main from "./main.ts";
export * as utils from "./utils.ts";

import { init } from "./command/init.ts";
import { fetch } from "./command/fetch.ts";
import { config } from "./command/config.ts";
import { add } from "./command/add.ts";
import { rm } from "./command/rm.ts";
import { ls } from "./command/ls.ts";
export const command = {
  init,
  fetch,
  config,
  add,
  rm,
  ls,
};
