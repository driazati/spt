const alias = require("esbuild-plugin-alias");
const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["static/script.jsx"],
    sourcemap: "external",
    write: true,
    bundle: true,
    outdir: "static/dist",
    jsxFactory: "h",
    jsxFragment: "Fragment",
    minify: true,
    sourcemap: true,
    plugins: [
      alias({
        react: require.resolve("preact/compat"),
      }),
    ],
    loader: {
      ".ttf": "binary",
    },
  })
  .then((a) => {})
  .catch((a) => {
    process.exit(1);
  });
