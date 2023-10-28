import { createServer } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import virtual from "vite-plugin-virtual";
import fg from "fast-glob";
import fs from "fs";
import revisionHash from "rev-hash";
import merge from "just-merge";

export type CreateDevServerConfig = {
  port: number;
  emails: string[];
};

const findEmails = async (globs: string[]) => {
  return fg.glob(globs, { absolute: true });
};

export const createDevServer = async (config: CreateDevServerConfig) => {
  console.log(config);

  const emails = await findEmails(config.emails);

  const virtualModule = `${emails
    .map((p) => `import * as email_${revisionHash(p)} from "${p}";`)
    .join("")}\n export default { ${emails
    .map((e) => `email_${revisionHash(e)}`)
    .join(",")}};`;

  console.log(virtualModule);

  const finalVirtualModules = merge({
    "virtual:config": {
      emailsKey: emails.map((p) => revisionHash(p)),
    },
    "virtual:emails": virtualModule,
  });

  const plugin = virtual(finalVirtualModules);

  fs.watch(path.resolve(process.cwd(), "./src"), (eventType, filename) => {
    // When new file is here, just
    console.log(eventType, filename);
  });

  const server = await createServer({
    configFile: false,
    root: path.resolve(__dirname, "../src"),
    plugins: [react(), plugin],
    server: {
      port: config.port,
    },
  });

  return server;
};
