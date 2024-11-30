// Import the type for Next.js configuration
import type {NextConfig} from "next";

// Import `createRequire` to safely use `require`
import {createRequire} from "module";

// Create a `require` function
const require = createRequire(import.meta.url);

// Import the `@next/mdx` package using `require`
const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});

// Create the Next.js configuration object
const nextConfig: NextConfig = withMDX({
    pageExtensions: ["ts", "tsx", "md", "mdx"],

    // Add any other Next.js settings here
    reactStrictMode: true,
});

// Export the final configuration
export default nextConfig;
