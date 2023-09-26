import { args } from "./mod.ts";
import { colors, command } from "./deps.ts";

function main(): Promise<void> {
  try {
    const parsedArgs = args.parseArgs(Deno.args);
    const command = parsedArgs.command;
    switch (command) {
      case "init":
        break;
      case "fetch":
        // do something
        break;
      case "config":
        // do something
        break;
      case "add":
        // do something
        break;
      case "rm":
        // do something
        break;
      case "ls":
        // do something
        break;
      default:
        throw new Error(`Unknown command: ${command}`);
    }
  } catch (err) {
    console.error(`${colors.red("Error occurred!")}: ${err.message}`);
    Deno.exit(1);
  }
  Deno.exit(0);
}

if (import.meta.main) {
  await main();
}
