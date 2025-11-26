"use client";

import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
}

export default function ClickParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const newParticles = Array.from({ length: 8 }, (_, i) => ({
                id: Date.now() + i,
                x: e.clientX,
                y: e.clientY,
            }));

            setParticles((prev) => [...prev, ...newParticles]);

            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
            }, 1000);
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <>
            {particles.map((particle, index) => {
                const angle = (index % 8) * (Math.PI / 4);
                const distance = 50;

                return (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            position: "fixed",
                            left: particle.x,
                            top: particle.y,
                            width: "6px",
                            height: "6px",
                            background: "#ef4444",
                            borderRadius: "50%",
                            pointerEvents: "none",
                            zIndex: 9999,
                            animation: `particle-burst 1s ease-out forwards`,
                            "--angle": `${angle}rad`,
                            "--distance": `${distance}px`,
                        } as React.CSSProperties}
                    />
                );
            })}
            <style jsx>{`
        @keyframes particle-burst {
          0% {
            transform: translate(-50%, -50%) translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) 
              translate(calc(cos(var(--angle)) * var(--distance)), calc(sin(var(--angle)) * var(--distance)));
            opacity: 0;
          }
        }
      `}</style>
        </>
    );
}
