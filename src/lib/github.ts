export function repoSlugFromUrl(githubUrl: string) {
  return new URL(githubUrl).pathname.replace(/^\//, '');
}

export async function getRepoStars(repoSlug: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repoSlug}`, {
      next: { revalidate: 3600 },
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
  } catch {
    return null;
  }
}
