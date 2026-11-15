import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex flex-1 flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="text-muted">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="text-accent font-medium hover:underline"
      >
        Back to home
      </Link>
    </main>
  );
}
