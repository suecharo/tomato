import { args, commands } from "./mod.ts";
import { colors } from "./deps.ts";

async function main(): Promise<void> {
  try {
    const parsedArgs = args.parseArgs(Deno.args);
    // const command = parsedArgs.command;
    // switch (command) {
    //   case "init":
    //     await commands.init();
    //     break;
    //   case "fetch":
    //     await commands.fetch();
    //     break;
    //   case "config":
    //     await commands.config();
    //     break;
    //   case "add":
    //     await commands.add();
    //     break;
    //   case "rm":
    //     await commands.rm();
    //     break;
    //   case "ls":
    //     await commands.ls();
    //     break;
    //   default:
    //     throw new Error(`Unknown command: ${command}`);
    // }
  } catch (err) {
    console.error(`${colors.red("Error occurred!")}: ${err.message}`);
    Deno.exit(1);
  }
  Deno.exit(0);
}

if (import.meta.main) {
  await main();
}
