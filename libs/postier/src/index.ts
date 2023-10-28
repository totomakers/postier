import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { devServer } from "@postier/client";

export const DEFAULT_PORT = 3001;
export const DEFAULT_FILE_GLOB = `**/*.email.tsx`;

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
    async (argv) => {
      const server = await devServer({
        emails: [argv.f],
        port: argv.p,
      });

      await server.listen();
      server.printUrls();
    }
  )
  .demandCommand(1)
  .parse();
