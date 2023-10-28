import { createViteServer } from "../runner/vite-server";

export const DEFAULT_PORT = 3001;
export const DEFAULT_FILE_GLOB = "./**/*.email.tsx";

export type RunDevServerOptions = {
  port?: number;
  fileGlob?: string;
};

export const runDevServer = async ({
  port = DEFAULT_PORT,
  fileGlob = DEFAULT_FILE_GLOB,
}: RunDevServerOptions) => {
  const server = await createViteServer({ port, fileGlob });
  await server.listen();
  server.printUrls();
};
