import React, { useState, useEffect } from "react";

export default function GridBackground() {
  const columns = 20;
  const rows = 10;
  const totalTiles = columns * rows;

  const [activeTiles, setActiveTiles] = useState(new Set());

  // Generate a set of random indexes for purple tiles
  const generateRandomTiles = () => {
    const newSet = new Set();
    const purpleCount = Math.floor(Math.random() * 15) + 15; // 15–30 random tiles
    while (newSet.size < purpleCount) {
      newSet.add(Math.floor(Math.random() * totalTiles));
    }
    return newSet;
  };

  useEffect(() => {
    setActiveTiles(generateRandomTiles());

    const interval = setInterval(() => {
      setActiveTiles(generateRandomTiles());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: "100vw",
          height: "100vh",
        }}
      >
        {Array.from({ length: totalTiles }).map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-700 ease-in-out ${
              activeTiles.has(i) ? "bg-purple-600" : "bg-white"
            }`}
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #f3e8ff",
            }}
          />
        ))}
      </div>
    </div>
  );
}
