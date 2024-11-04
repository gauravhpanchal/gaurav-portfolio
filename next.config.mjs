/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://nextjs.org/docs/app/api-reference/next-config-js
 */

/**
 * @type {import('next').NextConfig}
 */


const nextConfig = {
  /* config options here */
  images: {
    domains: ['skillicons.dev', 'blog.1chooo.com'], // Use domains instead of remotePatterns
    dangerouslyAllowSVG: true, // Enable SVG support for remote SVG images
    unoptimized: true, // Disable image optimization to avoid issues with remote images
  },
  // https://nextjs.org/docs/architecture/nextjs-compiler
  compiler: {
    styledComponents: true,
  },
  // https://nextjs.org/docs/pages/building-your-application/configuring/mdx
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
}
 
export default nextConfig
