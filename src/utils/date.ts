/** Evaluated per render (the page is ISR, so it refreshes on each revalidation). */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}
