import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  DEFAULT_FILE_GLOB,
  DEFAULT_PORT,
  runDevServer,
} from "./cmd/run-dev-server";

yargs(hideBin(process.argv))
  .command(
    "dev",
    "Running Email preview server",
    (yargs) => {
      return yargs
        .option("p", {
          type: "number",
          default: DEFAULT_PORT,
          alias: "port",
          describe: "Change running port",
        })
        .option("f", {
          type: "string",
          default: DEFAULT_FILE_GLOB,
          alias: "files",
        });
    },
    (argv) => {
      runDevServer({
        port: argv.p,
        fileGlob: argv.f,
      });
    }
  )
  .demandCommand(1)
  .parse();
