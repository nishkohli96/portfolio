import { ImageResponse } from 'next/og';
import { profile } from '@/constants';

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Mirrors the dark-theme tokens in globals.css (CSS variables are unavailable in ImageResponse).
const COLORS = {
  background: '#0b0d12',
  foreground: '#f5f7fa',
  accent: '#56aee8',
  muted: '#9aa4b2',
} as const;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 80,
        background: COLORS.background,
        color: COLORS.foreground,
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: COLORS.accent,
          letterSpacing: 4
        }}
      >
        PORTFOLIO
      </div>
      <div
        style={{
          fontSize: 88,
          fontWeight: 700,
          marginTop: 16
        }}
      >
        {profile.name}
      </div>
      <div
        style={{
          fontSize: 44,
          color: COLORS.accent,
          marginTop: 12
        }}
      >
        {profile.role}
      </div>
      <div
        style={{
          fontSize: 30,
          color: COLORS.muted,
          marginTop: 32
        }}
      >
        React · Next.js · Node.js · TypeScript · AWS
      </div>
    </div>,
    size
  );
}
