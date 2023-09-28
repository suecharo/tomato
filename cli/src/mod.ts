export * as args from "./args.ts";
export * as const_ from "./const.ts";
export * as main from "./main.ts";
export * as utils from "./utils.ts";
export * as fileIndex from "./fileIndex.ts";
export * as config from "./config.ts";

import { init } from "./commands/init.ts";
import { fetch } from "./commands/fetch.ts";
import { config } from "./commands/config.ts";
import { add } from "./commands/add.ts";
import { rm } from "./commands/rm.ts";
import { ls } from "./commands/ls.ts";
export const commands = {
  init,
  fetch,
  config,
  add,
  rm,
  ls,
};
