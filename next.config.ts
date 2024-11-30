// Import the type for Next.js configuration
import type {NextConfig} from "next";

// Create the Next.js configuration object
const nextConfig: NextConfig = {
    pageExtensions: ["ts", "tsx", "md", "mdx"],

    // Add any other Next.js settings here
    reactStrictMode: true,
};

// Export the final configuration
export default nextConfig;
