/** `https://github.com/owner/repo` -> `owner/repo` */
export function repoSlugFromUrl(githubUrl: string): string {
  return new URL(githubUrl).pathname.replace(/^\//, '');
}

/** `https://www.npmjs.com/package/@scope/name` -> `@scope/name` */
export function packageNameFromUrl(npmUrl: string): string {
  return new URL(npmUrl).pathname.replace(/^\/package\//, '');
}
