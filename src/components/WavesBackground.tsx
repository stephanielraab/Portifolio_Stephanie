"use client";

import { useEffect, useRef } from "react";

export function WavesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c: HTMLCanvasElement = canvas;
    const cx: CanvasRenderingContext2D = ctx;

    let animId: number;
    let t = 0;

    function resize() {
      c.width  = window.innerWidth;
      c.height = window.innerHeight;
    }

    function drawWave(
      amplitude: number,
      period: number,
      speed: number,
      yBase: number,
      color: string,
    ) {
      cx.beginPath();
      cx.moveTo(0, c.height);

      for (let x = 0; x <= c.width; x += 2) {
        const y =
          yBase +
          Math.sin((x / c.width) * period * Math.PI * 2 + t * speed) * amplitude +
          Math.sin((x / c.width) * period * 0.5 * Math.PI * 2 + t * speed * 1.3) * (amplitude * 0.4);
        cx.lineTo(x, y);
      }

      cx.lineTo(c.width, c.height);
      cx.lineTo(0, c.height);
      cx.closePath();
      cx.fillStyle = color;
      cx.fill();
    }

    function loop() {
      cx.clearRect(0, 0, c.width, c.height);

      const h = c.height;

      drawWave(38, 2.2, 0.18, h * 0.72, "rgba(120, 20, 70, 0.35)");
      drawWave(30, 2.8, 0.28, h * 0.78, "rgba(99, 25, 66, 0.55)");
      drawWave(22, 3.5, 0.42, h * 0.84, "rgba(60, 10, 40, 0.75)");

      t += 0.012;
      animId = requestAnimationFrame(loop);
    }

    resize();
    loop();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 w-full h-full"
    />
  );
}