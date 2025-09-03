import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig({
  plugins: [glsl(), codeInspectorPlugin({
    bundler: 'vite',
  }),],
});
