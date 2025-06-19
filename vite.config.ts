import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from 'vite-plugin-sitemap'; // <--- Import the sitemap plugin

// Define your app's routes for the sitemap
// These should match the 'path' attributes in your App.tsx <Route> components
const appRoutes = [
  '/',
  '/showcase-gallery',
  '/art-supplies',
  '/art-kits',
  '/faq',
  '/blog',
  // If you have individual blog post pages like /blog/my-post-slug,
  // you'd ideally list them here too. If they are numerous or generated,
  // you might need a more dynamic way to generate this list or ensure
  // your /blog page links to all of them clearly so Google can crawl them.
  // For now, listing the main sections is a great start.
];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.YOURDOMAIN.com', // <--- IMPORTANT: Replace with your actual domain
      dynamicRoutes: appRoutes,
      // Optional: if your build output directory is not 'dist'
      // outDir: 'your-build-output-dir',
      // Optional: to exclude specific routes
      // exclude: ['/admin/**', '/private-page'],
      // Optional: for pretty URLs (removes .html, usually good for SPAs)
      // extensions: ['html'], // If you want to explicitly state which extensions to look for if it were crawling
      // pretty: true, // This often helps with SPAs to not add .html to client-side routes
      robots: [ // Optional: Generate a robots.txt
        { userAgent: '*', allow: '/' },
        // Add more specific rules if needed
        // { userAgent: 'Googlebot', disallow: '/admin' }
      ]
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));