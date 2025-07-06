import relativeLinks from "astro-relative-links";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import license from "rollup-plugin-license";

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  compressHTML: false,
  integrations: [relativeLinks()],
  vite: {
    build: {
      cssMinify: true, // css圧縮する場合はtrue
      cssCodeSplit: false, // cssコード分割を有効の場合はtrue
      assetsInlineLimit: 0, //インラインでの出力無効
      minify: "esbuild",
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let extType =
              assetInfo.names?.[0]?.split(".").at(-1) ||
              assetInfo.fileName.split(".").at(-1);
            let folder = "others";

            if (
              /png|jpe?g|svg|gif|tiff?|bmp|ico|webp|avif|heic|heif/i.test(
                extType
              )
            ) {
              folder = "images";
              return "assets/images/[name].[extname]";
            } else if (/css|scss/i.test(extType)) {
              folder = "css";
              return "assets/css/index.css";
            }
            return `assets/${folder}/[name].[extname]`;
          },
          entryFileNames: "assets/js/index.js",
        },
        plugins: [
          license({
            thirdParty: {
              output: "dist/assets/js/license.txt",
              includePrivate: true,
            },
          }),
        ],
      },
    },
    css: {
      postcss: "./config/postcss.config.cjs",
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "/src/assets/css/foundation/global/index.scss" as *;
          `,
        },
      },
    },
  },
});
