import type { ComponentProps } from 'react';

type ExternalLinkProps = ComponentProps<'a'> & { href: string };

/** Anchor that opens http(s) links in a new tab safely; `mailto:` links stay in place. */
export default function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  const newTabProps = href.startsWith('mailto:')
    ? {}
    : { target: '_blank', rel: 'noreferrer noopener' };

  return (
    <a
      href={href}
      {...newTabProps}
      {...props}
    >
      {children}
    </a>
  );
}
