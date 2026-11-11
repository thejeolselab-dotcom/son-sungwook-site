/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? repoName : "",
  assetPrefix: isGithubPages ? repoName : "",
};

export default nextConfig;
