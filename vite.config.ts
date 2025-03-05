
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add proper MIME type handling for TypeScript files
    fs: {
      // Allow serving files from one level up to the project root
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
  // Add base path for production builds - using relative path for Squarespace compatibility
  base: "./",
  build: {
    // Output directory for production build
    outDir: "dist",
    // Generate source maps for better debugging
    sourcemap: true,
    // Ensure assets are correctly referenced with relative paths
    assetsDir: "assets",
    // Rollup options for better compatibility with static hosting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        // Ensure proper MIME types by adjusting file extensions
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Properly handle JSX/TSX files during development
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
    },
  },
}));
