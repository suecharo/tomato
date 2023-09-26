import { colors, flags } from "./deps.ts";
import { main } from "./mod.ts";

function usage(): void {
  console.log(`\
  tomato ${main.TomatoVersion} by @suecharo

  A data management system for any kind of transfer protocols (with shared annotation)

  ${colors.blue("Usage:")}
    tomato [command] [options]

  ${colors.blue("Commands:")}
    init [dir_path]    Create config and index file
    fetch <url | path> Fetch file content
    config             Show config
    add <url | path>   Add file to index
    rm <url | path>    Remove file from index
    ls                 List index
    help               Show help
    version            Show version
`);
  Deno.exit(0);
}

const commandList = [
  "init",
  "fetch",
  "config",
  "add",
  "rm",
  "ls",
  "help",
  "version",
];
type Command = typeof commandList[number];

interface Args {
  command: Command;
}

export function parseArgs(args: string[]): Args {
  const parseArgs = flags.parse(args, {
    boolean: ["help", "version"],
    alias: {
      help: "h",
      version: "v",
    },
  });

  parseArgs.help && usage();
  if (parseArgs.version) {
    console.log(main.TomatoVersion);
    Deno.exit(0);
  }

  if (parseArgs._.length === 0) {
    throw new Error("No command specified (see `tomato help`)");
  }
  const command = parseArgs._[0];
  if (commandList.includes(`${command}`)) {
    return { command: `${command}` as Command };
  }
  throw new Error(`Unknown command: ${command} (see \`tomato help\`)`);
}
