import type { Breakpoint } from "@/hooks/use-responsive-image-size";

export const GITHUB_USERNAME = '';
export const MEDIUM_USERNAME = '';
export const TWITTER_USERNAME = '';
export const LINKEDIN_USERNAME = '';
export const EMAIL = '';

export const POSTS_PER_PAGE = 8;

export const DEVOPS = {
  linux: "linux",
  aws: "aws",
  azure: "azure",
  githubactions: "githubactions",
  docker: "docker",
  fastapi: "fastapi",
  kubernetes: "kubernetes",
  flask: "flask",
  gitlab: "gitlab",
  redis: "redis"
}

export const PROGLANG =  {
  python: "py",
  go: "go",
  java: "java",
  cpp: "cpp",
  c: "c",
  react: "react",
  typescript: "typescript",
  javascript: "javascript",
  flutter: "flutter",
  bash: "bash"
}

export const breakpoints: Breakpoint[] = [
  { maxWidth: 375, size: { width: 80, height: 80 } },
  { maxWidth: 580, size: { width: 150, height: 150 } },
  { maxWidth: 1250, size: { width: 120, height: 120 } },
  { maxWidth: Infinity, size: { width: 150, height: 150 } },
];
