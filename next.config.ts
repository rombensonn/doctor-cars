import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesRepo = process.env.GITHUB_PAGES_REPO || "doctor-cars";

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  ...(isGithubPages
    ? {
        output: "export",
        basePath: `/${githubPagesRepo}`,
        assetPrefix: `/${githubPagesRepo}/`,
        images: {
          unoptimized: true,
        },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
