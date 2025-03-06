import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ['..']
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  base: '/archeo2/', // This should match your repository name
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  // Use relative paths for Squarespace compatibility
  base: "./",
  build: {
    // Output directory
    outDir: "dist",
    sourcemap: false, // Disable sourcemaps for production
    // Use relative paths for assets
    assetsDir: "assets",
    // Ensure JS files are properly built and named
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  // Configure proper handling of TypeScript files
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify(mode),
        // Disable HMR-related features for production builds
        'import.meta.hot': 'undefined'
      }
    },
  },
}));
