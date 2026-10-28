export function repoSlugFromUrl(githubUrl: string) {
  return new URL(githubUrl).pathname.replace(/^\//, '');
}

export async function getRepoStats(repoSlug: string): Promise<{ stars: number; forks: number } | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repoSlug}`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return {
      stars: typeof data.stargazers_count === 'number' ? data.stargazers_count : 0,
      forks: typeof data.forks_count === 'number' ? data.forks_count : 0,
    };
  } catch {
    return null;
  }
}
