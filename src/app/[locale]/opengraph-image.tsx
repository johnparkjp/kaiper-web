import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KAIPER — Cooling Solutions for Extreme Heat';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { locale: string } }) {
  const isKo = params.locale === 'ko';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: 80,
            height: 4,
            backgroundColor: '#2e90fa',
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#f5f5f5',
            letterSpacing: '0.08em',
            marginBottom: 16,
          }}
        >
          KAIPER
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#8b8f96',
            maxWidth: 600,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          {isKo
            ? '극한 더위를 이기는 쿨링 솔루션'
            : 'Cooling Solutions for Extreme Heat'}
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#2e90fa',
            }}
          />
          <div style={{ fontSize: 16, color: '#6a6e77', letterSpacing: '0.1em' }}>
            kaiper.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
