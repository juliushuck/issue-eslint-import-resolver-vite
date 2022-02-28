import path from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export const viteConfig = defineConfig({
    resolve: { alias: { "@": path.resolve(__dirname, "src") } },
    plugins: [eslintPlugin()],
    server: {
        host: "0.0.0.0",
        port: 4001,
    },
});

export default viteConfig;
