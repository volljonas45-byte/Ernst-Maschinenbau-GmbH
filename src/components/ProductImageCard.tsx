interface ProductImageCardProps {
  src?: string;
  imageSrc?: string;
  label: string;
  alt?: string;
}

export default function ProductImageCard({ src, imageSrc, label, alt }: ProductImageCardProps) {
  const imgSrc = src || imageSrc;
  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      background: "#f0f0f5",
      aspectRatio: "4/3",
      transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.14)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.08)";
      }}
    >
      {/* Image */}
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={alt || label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #e0e0e8, #c8c8d4)" }} />
      )}

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Label */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        padding: "16px 14px 12px",
      }}>
        <p style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#fff",
          margin: 0,
          letterSpacing: "-0.01em",
          textShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }}>
          {label}
        </p>
      </div>
    </div>
  );
}
