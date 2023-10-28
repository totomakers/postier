import react from "@vitejs/plugin-react-swc";
import fg from "fast-glob";
import path from "path";
import { createServer } from "vite";
import virtual from "vite-plugin-virtual";

export type CreateViteServerProps = {
  port: number;
  fileGlob: string;
};

export const createViteServer = async ({
  port,
  fileGlob,
}: CreateViteServerProps) => {
  const emailPaths = fg.globSync([fileGlob], {
    absolute: true,
    onlyFiles: true,
  });

  console.log(emailPaths[0]);

  const plugin = virtual({
    "virtual:reactEmails": `export * from '${emailPaths[0]}'`,
  });

  const server = await createServer({
    configFile: false,
    root: path.resolve(__dirname, "../client"),
    plugins: [react(), plugin],

    server: {
      port,
    },
  });

  return server;
};
