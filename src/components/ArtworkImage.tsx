import Image from "next/image";
import type { Artwork } from "@/data/artworks";

/** Shows the real image if set, otherwise an abstract placeholder in the artwork's palette. */
export function ArtworkImage({
  artwork,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  className = "",
}: {
  artwork: Artwork;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-stone-200 ${className}`}
      style={{ aspectRatio: artwork.ratio }}
    >
      {artwork.image ? (
        <Image
          src={artwork.image}
          alt={`${artwork.title}, ${artwork.medium}, ${artwork.year}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <Placeholder artwork={artwork} />
      )}
    </div>
  );
}

function hash(s: string) {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0;
  return Math.abs(h);
}

function Placeholder({ artwork }: { artwork: Artwork }) {
  const [bg, a, b, ink] = artwork.palette;
  const h = hash(artwork.slug);
  const w = 400;
  const ht = Math.round(w / artwork.ratio);
  const sunX = 80 + (h % 240);
  const sunY = ht * (0.22 + ((h >> 3) % 20) / 100);
  const horizon = ht * (0.55 + ((h >> 5) % 15) / 100);
  const variant = h % 3;

  return (
    <svg
      viewBox={`0 0 ${w} ${ht}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label={`Placeholder for ${artwork.title}`}
    >
      <defs>
        <filter id={`grain-${artwork.slug}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={h % 50} />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <rect width={w} height={ht} fill={bg} />
      <circle cx={sunX} cy={sunY} r={ht * 0.16} fill={b} opacity={0.9} />
      <path
        d={`M0 ${horizon} C ${w * 0.3} ${horizon - 40}, ${w * 0.6} ${horizon + 30}, ${w} ${horizon - 10} L ${w} ${ht} L 0 ${ht} Z`}
        fill={a}
      />
      <path
        d={`M0 ${horizon + 50} C ${w * 0.4} ${horizon + 20}, ${w * 0.7} ${horizon + 80}, ${w} ${horizon + 40} L ${w} ${ht} L 0 ${ht} Z`}
        fill={ink}
        opacity={0.85}
      />
      {variant === 0 &&
        [0, 1, 2].map((i) => (
          <g key={i} fill={ink} transform={`translate(${70 + i * 95 + (h % 30)} ${horizon - 6})`}>
            <circle cx="0" cy={-62 - i * 4} r="9" />
            <path d={`M-12 ${-50 - i * 4} Q0 ${-58 - i * 4} 12 ${-50 - i * 4} L 9 10 L -9 10 Z`} />
          </g>
        ))}
      {variant === 1 &&
        Array.from({ length: 7 }).map((_, i) => (
          <line
            key={i}
            x1={30 + i * 55}
            y1={horizon + 10}
            x2={22 + i * 55 + ((h >> i) % 18)}
            y2={horizon - 70 - ((h >> i) % 40)}
            stroke={ink}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      {variant === 2 && (
        <g fill="none" stroke={b} strokeWidth="2.5" opacity="0.8">
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M0 ${horizon + 18 + i * 22} Q ${w / 4} ${horizon + 8 + i * 22} ${w / 2} ${horizon + 18 + i * 22} T ${w} ${horizon + 18 + i * 22}`}
            />
          ))}
        </g>
      )}
      <rect width={w} height={ht} filter={`url(#grain-${artwork.slug})`} fill={bg} />
    </svg>
  );
}
