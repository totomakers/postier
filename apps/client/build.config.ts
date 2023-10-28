import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./lib/main"],
  outDir: "dist",
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});
