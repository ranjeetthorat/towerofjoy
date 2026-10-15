import type { NextConfig } from "next";
import { execSync } from "child_process";
import packageJson from "./package.json";

function getCommitSha(): string {
  if (process.env.VERCEL_GIT_COMMIT_SHA) {
    return process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7);
  }
  if (process.env.NEXT_PUBLIC_COMMIT_SHA) {
    return process.env.NEXT_PUBLIC_COMMIT_SHA.slice(0, 7);
  }
  try {
    return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "dev";
  }
}

function getBuildNumber(): string {
  if (process.env.BUILD_NUMBER) {
    return process.env.BUILD_NUMBER;
  }
  if (process.env.NEXT_PUBLIC_BUILD_NUMBER) {
    return process.env.NEXT_PUBLIC_BUILD_NUMBER;
  }
  try {
    return execSync("git rev-list --count HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "1";
  }
}

const commitSha = getCommitSha();
const buildNumber = getBuildNumber();
const appVersion = packageJson.version || "0.1.0";
const buildTime = new Date().toISOString();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: appVersion,
    NEXT_PUBLIC_BUILD_NUMBER: buildNumber,
    NEXT_PUBLIC_COMMIT_SHA: commitSha,
    NEXT_PUBLIC_BUILD_TIME: buildTime,
  },
};

export default nextConfig;

