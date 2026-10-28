import { ImageResponse } from 'next/og';
import { profile } from '@/lib/data';

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0b0d12',
          color: '#f5f7fa',
        }}
      >
        <div style={{ fontSize: 28, color: '#56aee8', letterSpacing: 4 }}>
          PORTFOLIO
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 44, color: '#56aee8', marginTop: 12 }}>
          {profile.role}
        </div>
        <div style={{ fontSize: 30, color: '#9aa4b2', marginTop: 32 }}>
          React · Next.js · Node.js · TypeScript · AWS
        </div>
      </div>
    ),
    size,
  );
}
