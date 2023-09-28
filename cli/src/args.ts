import { parse } from "https://deno.land/std@0.202.0/flags/mod.ts";
import { colors, flags } from "./deps.ts";
import { const_ } from "./mod.ts";

function usage(): void {
  console.log(`\
  tomato ${const_.TomatoVersion} by @suecharo

  A data management system for any kind of transfer protocols (with shared annotation)

  ${colors.blue("Usage:")}
    tomato [options] <url | path>      Flush file content (see \`tomato flush --help\`)
    tomato <command> [options] [args]

  ${colors.blue("Commands:")}
    flush <url | path>        Flush file content (same as no command)
    add <url | path>          Add file to index
    rm <url | path>           Remove file from index
    ls                        List index

  ${colors.blue("Options:")}
    -h, --help                Print this usage
    -v, --version             Print version

  ${colors.blue("Environment Variables:")}
    TOMATO_PUBLIC_SERVER_URL  Public server url (default: ${const_.PublicServerUrl})
    TOMATO_DIR                Tomato directory path (default: ~/${const_.TomatoDirName})
`);
  Deno.exit(0);
}

const commandList = [
  "flush",
  "add",
  "rm",
  "ls",
];
type Command = typeof commandList[number];

interface FlushArgs {}

const flushParserOptions = {
  boolean: ["help", "version"],
  alias: {
    help: "h",
    version: "v",
  },
};

interface AddArgs {}

const addParserOptions = {
  boolean: ["help", "version"],
  alias: {
    help: "h",
    version: "v",
  },
};

interface RmArgs {}

const rmParserOptions = {
  boolean: ["help", "version"],
  alias: {
    help: "h",
    version: "v",
  },
};

interface LsArgs {}

const lsParserOptions = {
  boolean: ["help", "version"],
  alias: {
    help: "h",
    version: "v",
  },
};

interface Args {
  command: Command;
  commandArgs: FlushArgs | AddArgs | RmArgs | LsArgs;
}

export function parseArgs(args: string[]): any {
  const parseArgs = flags.parse(args, {
    ...flushParserOptions,
    stopEarly: true,
  });

  if (`${parseArgs._.0}` === "add") {
    // add [options] <url | path>
  } else if ("rm" in parseArgs._) {
    // rm [options] <url | path>
  } else if ("ls" in parseArgs._) {
    // ls [options]
  } else {
    // flush [options] <url | path>
  }

  // parseArgs.help && usage();
  // if (parseArgs.version) {
  //   console.log(const_.TomatoVersion);
  //   Deno.exit(0);
  // }

  // if (parseArgs._.length === 0) {
  //   throw new Error("No command specified (see `tomato help`)");
  // }
  // const command = parseArgs._[0];
  // if (commandList.includes(`${command}`)) {
  //   return { command: `${command}` as Command };
  // }
  // throw new Error(`Unknown command: ${command} (see \`tomato help\`)`);
}
