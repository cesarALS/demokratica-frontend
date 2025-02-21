"use client";

import React, { useEffect, useRef, useState } from "react";
import cloud, { Word } from "d3-cloud";

interface WordData {
  text: string;
  value: number;
}

const words: WordData[] = [
  { text: "React", value: 80 },
  { text: "Next.js", value: 70 },
  { text: "TypeScript", value: 60 },
  { text: "Tailwind", value: 50 },
  { text: "JavaScript", value: 40 },
  { text: "Web Dev", value: 30 },
  { text: "OpenAI", value: 20 },
  { text: "Cloud", value: 15 },
  { text: "Innovation", value: 10 },
];

export default function WordCloud() {
  const [wordData, setWordData] = useState<
    { text: string; x: number; y: number; size: number }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 80, height: 80 });

  // Resize handler
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        const minSize = Math.min(clientWidth, clientHeight); // Use the minimum dimension
        setSize({ width: minSize, height: minSize });
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Generate word cloud layout
  useEffect(() => {
    const layout = cloud()
      .size([size.width, size.height])
      .words(words.map((d) => ({ text: d.text, size: d.value }) as Word))
      .padding(5)
      .rotate(0) // No rotation
      .fontSize((d) => d.size ?? 10)
      .on("end", (output) =>
        setWordData(
          output.map((d) => ({
            text: d.text ?? "",
            x: d.x ?? 0,
            y: d.y ?? 0,
            size: d.size ?? 10,
          })),
        ),
      );

    layout.start();
  }, [size]);

  return (
    <div
      ref={containerRef}
      className="flex h-[300px] w-full items-center justify-center sm:h-[400px] md:h-[500px]"
    >
      <svg width={size.width} height={size.height}>
        {wordData.map((d, i) => (
          <text
            key={i}
            x={d.x + size.width / 2}
            y={d.y + size.height / 2}
            fontSize={d.size}
            fontWeight="bold"
            fill={`hsl(${(i / words.length) * 360}, 100%, 50%)`} // HSL color spectrum
            textAnchor="middle"
          >
            {d.text}
          </text>
        ))}
      </svg>
    </div>
  );
}
