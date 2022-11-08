import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      extendPlugins: "astroDefaults",
    }),
    image(),
  ],
});
