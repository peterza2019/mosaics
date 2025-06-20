// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Or your React plugin
import path from "path";
import sitemap from 'vite-plugin-sitemap';
// import { componentTagger } from "lovable-tagger"; // If you're still using this

// --- Define all your application routes here ---
// These should match the 'path' attributes in your App.tsx <Route> components
const appRoutes = [
  '/', // Your Index page
  '/showcase-gallery',
  '/art-supplies',
  '/art-kits',
  '/faq',
  '/blog',
  // --- ADD ANY NEW PAGES YOU'VE CREATED HERE ---
  // Example:
  // '/new-page-1',
  // '/products/cool-product',
  // '/about-us',

  // If you have many dynamic blog posts, e.g., /blog/my-post-title:
  // You might need a more dynamic way to get these slugs if they are numerous.
  // For a few, you can list them manually:
  // '/blog/my-first-post',
  // '/blog/another-great-article',
  // Alternatively, if your /blog page clearly links to all posts,
  // Google will likely find them via crawling, but including them in the
  // sitemap is still best practice if feasible.
];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemap({
      hostname: 'https://arlenes.co.za', // Your actual domain
      dynamicRoutes: appRoutes,
      // Optional: Change frequency and priority can be set globally or per-route
      // Google pays less attention to these now, but they don't hurt.
      // changefreq: 'weekly',
      // priority: 0.7,
      // lastmod: new Date(), // Sets lastmod to the build date for all pages
      robots: [ // Generates a robots.txt file
        { userAgent: '*', allow: '/' },
        // Example: Disallow a specific path
        // { userAgent: '*', disallow: '/admin' }
      ]
    }),
    // mode === 'development' && componentTagger(), // If you're still using this
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));