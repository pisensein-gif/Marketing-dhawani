"use client";

import React, { useEffect, useRef, useState } from "react";

interface CursorTrackingMascotProps {
  heroRef?: React.RefObject<HTMLElement | null>;
  className?: string;
}

const TOTAL_FRAMES = 215;
const DEFAULT_FRAME = 205; // Looking directly at the screen / camera

export default function CursorTrackingMascot({
  heroRef,
  className = "",
}: CursorTrackingMascotProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const targetMouseRef = useRef<{ x: number; y: number; isInside: boolean }>({
    x: 0,
    y: 0,
    isInside: false,
  });
  const smoothMouseRef = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const currentFrameRef = useRef<number>(DEFAULT_FRAME);
  const animFrameIdRef = useRef<number | null>(null);

  // Preload frames
  useEffect(() => {
    let active = true;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES + 1);

    // Preload the default frame first
    const defaultImg = new Image();
    defaultImg.src = `/mascot-frames/frame_${String(DEFAULT_FRAME).padStart(4, "0")}.webp`;
    defaultImg.onload = () => {
      if (active) {
        images[DEFAULT_FRAME] = defaultImg;
        imagesRef.current = images;
        setIsLoaded(true);

        // Draw initial frame to canvas
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(defaultImg, 0, 0, canvas.width, canvas.height);
          }
        }
      }
    };

    // Preload remaining frames in background
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      if (i === DEFAULT_FRAME) continue;
      const img = new Image();
      img.src = `/mascot-frames/frame_${String(i).padStart(4, "0")}.webp`;
      img.onload = () => {
        if (active) {
          images[i] = img;
        }
      };
    }

    imagesRef.current = images;

    return () => {
      active = false;
    };
  }, []);

  // Frame calculation based on mouse position relative to mascot head
  const calculateTargetFrame = (
    mouseX: number,
    mouseY: number,
    isInside: boolean
  ): number => {
    if (!isInside) {
      return DEFAULT_FRAME;
    }

    const canvas = canvasRef.current;
    if (!canvas) return DEFAULT_FRAME;

    const rect = canvas.getBoundingClientRect();
    // Mascot head position in canvas coordinates (72% from left, 15% from top)
    const mascotHeadX = rect.left + rect.width * 0.72;
    const mascotHeadY = rect.top + rect.height * 0.15;

    const diffX = mouseX - mascotHeadX;
    const diffY = mouseY - mascotHeadY;

    // Normalizing based on window dimensions
    const normX = Math.max(-1, Math.min(1, diffX / (window.innerWidth * 0.45)));
    const normY = Math.max(-1, Math.min(1, diffY / (window.innerHeight * 0.4)));

    const dist = Math.hypot(normX, normY);
    if (dist < 0.08) {
      return DEFAULT_FRAME;
    }

    const intensity = Math.min(dist, 1.0);
    const deg = Math.atan2(normY, normX) * (180 / Math.PI); // -180 to 180

    // Map angle and intensity to frame number
    if (deg >= -22.5 && deg <= 22.5) {
      // Pure Right
      return Math.round(DEFAULT_FRAME - intensity * (DEFAULT_FRAME - 155));
    } else if (deg < -22.5 && deg > -67.5) {
      // Up-Right
      return Math.round(DEFAULT_FRAME - intensity * (DEFAULT_FRAME - 165));
    } else if (deg <= -67.5 && deg >= -112.5) {
      // Pure Up
      return Math.round(104 - intensity * (104 - 86));
    } else if (deg < -112.5 && deg > -157.5) {
      // Up-Left
      return Math.round(36 + intensity * (65 - 36));
    } else if (deg >= 157.5 || deg <= -157.5) {
      // Pure Left
      return Math.round(1 + intensity * 35);
    } else if (deg > 112.5 && deg < 157.5) {
      // Down-Left
      return Math.round(1 + intensity * 30);
    } else if (deg >= 67.5 && deg <= 112.5) {
      // Pure Down
      return Math.round(104 + intensity * (124 - 104));
    } else if (deg > 22.5 && deg < 67.5) {
      // Down-Right
      return Math.round(104 + intensity * (134 - 104));
    }

    return DEFAULT_FRAME;
  };

  // Mouse move listener attached to hero section
  useEffect(() => {
    const targetElement = heroRef?.current || document.body;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        isInside: true,
      };
    };

    const handleMouseLeave = () => {
      targetMouseRef.current.isInside = false;
    };

    targetElement.addEventListener("mousemove", handleMouseMove as EventListener);
    targetElement.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      targetElement.removeEventListener(
        "mousemove",
        handleMouseMove as EventListener
      );
      targetElement.removeEventListener(
        "mouseleave",
        handleMouseLeave as EventListener
      );
    };
  }, [heroRef]);

  // Smooth frame interpolation render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      // Smoothly interpolate mouse coordinates
      if (targetMouseRef.current.isInside) {
        if (smoothMouseRef.current.x === 0 && smoothMouseRef.current.y === 0) {
          smoothMouseRef.current.x = targetMouseRef.current.x;
          smoothMouseRef.current.y = targetMouseRef.current.y;
        } else {
          smoothMouseRef.current.x +=
            (targetMouseRef.current.x - smoothMouseRef.current.x) * 0.05;
          smoothMouseRef.current.y +=
            (targetMouseRef.current.y - smoothMouseRef.current.y) * 0.05;
        }
      }

      const target = calculateTargetFrame(
        smoothMouseRef.current.x,
        smoothMouseRef.current.y,
        targetMouseRef.current.isInside
      );

      const current = currentFrameRef.current;

      if (Math.abs(current - target) > 0.2) {
        // Find shortest path considering the circular loop around center (1 and 205/215)
        let delta = target - current;

        // If transitioning around 1 <-> 215 boundary
        if (Math.abs(delta) > TOTAL_FRAMES / 2) {
          if (delta > 0) {
            delta -= TOTAL_FRAMES;
          } else {
            delta += TOTAL_FRAMES;
          }
        }

        // Gentle speed cap with ease-out for calm, organic motion
        const rawStep = delta * 0.05;
        const maxStep = 0.7; // Capped speed for smooth, cinematic rotation
        const step = Math.sign(rawStep) * Math.min(Math.abs(rawStep), maxStep);

        let nextFrame = current + step;

        if (nextFrame < 1) nextFrame += TOTAL_FRAMES;
        if (nextFrame > TOTAL_FRAMES) nextFrame -= TOTAL_FRAMES;

        currentFrameRef.current = nextFrame;
      } else {
        currentFrameRef.current = target;
      }

      const frameToDraw = Math.round(currentFrameRef.current);
      const img = imagesRef.current[frameToDraw] || imagesRef.current[DEFAULT_FRAME];

      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-auto flex justify-center items-center">
      {/* Fallback image while loading / on initial paint */}
      {!isLoaded && (
        <img
          src={`/mascot-frames/frame_${String(DEFAULT_FRAME).padStart(4, "0")}.webp`}
          alt="Dhwani Mascot"
          className={className}
        />
      )}
      <canvas
        ref={canvasRef}
        width={1280}
        height={720}
        className={`${className} ${!isLoaded ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
      />
    </div>
  );
}
