"use client";

export default function BackgroundMesh() {
    return (
        <div
            className="fixed inset-0 z-[-10] w-full h-full pointer-events-none"
            style={{
                backgroundColor: "#0D0D0D",
                backgroundImage: `
                    radial-gradient(circle at 10% 20%, rgba(26, 26, 46, 0.7) 0%, transparent 40%),
                    radial-gradient(circle at 90% 60%, rgba(37, 37, 37, 0.5) 0%, transparent 50%),
                    radial-gradient(circle at 30% 90%, rgba(26, 26, 46, 0.6) 0%, transparent 45%)
                `,
                transform: "translateZ(0)",
                WebkitTransform: "translateZ(0)",
                backfaceVisibility: "hidden"
            }}
        />
    );
}
