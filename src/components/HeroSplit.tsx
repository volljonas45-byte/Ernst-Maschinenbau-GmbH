import { asset } from "@/lib/assetPath";

interface HeroSplitProps {
  imageSrc?: string;
  title: string;
  bullets?: string[];
  bgColor?: string;
}

export default function HeroSplit({
  imageSrc,
  title,
  bullets = [],
  bgColor = "#1c6e34",
}: HeroSplitProps) {
  return (
    <div className="relative w-full h-64 md:h-80 flex overflow-hidden">
      {/* Left: Photo (70%) */}
      <div className="w-[70%] relative bg-gray-300 overflow-hidden">
        {imageSrc ? (
          <img src={asset(imageSrc)} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
            <svg className="w-24 h-24 text-gray-500 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Right: Green box (30%) */}
      <div
        className="w-[30%] flex flex-col justify-center px-6 py-8 text-white"
        style={{ backgroundColor: bgColor }}
      >
        <h2 className="font-bold text-lg leading-snug mb-3">{title}</h2>
        {bullets.length > 0 && (
          <ul className="space-y-1 text-sm">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-xs mt-1 shrink-0">■</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
