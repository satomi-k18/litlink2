import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
// PWA support can be re-enabled once service worker build is stable.

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  const devSubPathPlugin: PluginOption = {
    name: 'litlink2-dev-subpath',
    apply: 'serve' as const,
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url && req.url.startsWith('/litlink2')) {
          const nextPath = req.url.replace(/^\/litlink2/, '') || '/';
          req.url = nextPath;
        }
        next();
      });
    },
  };

  const plugins = [react()];
  if (!isBuild) {
    plugins.push(devSubPathPlugin);
  }

  return {
    base: './',
    ...(isBuild ? {} : { base: '/' }),
    plugins,
  };
});
