"use client";

import * as React from "react";
import { heroVideo } from "@/content/media";
import { StockTag } from "@/components/media/photo";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Muted, looping hero film with a visible pause control (WCAG 2.2.2).
 * Visitors who prefer reduced motion see the poster until they press play.
 */
export function HeroVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [playing, setPlaying] = React.useState(false);
  const userPaused = React.useRef(false);

  // Autoplay only while on screen, and never when reduced motion is preferred.
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <div className="bg-night absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        data-hero-video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.src}
        poster={heroVideo.poster}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <StockTag className="top-4 right-16 bottom-auto left-auto sm:top-6 sm:right-20">
        Stock footage
      </StockTag>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="bg-paper/90 text-ink hover:bg-paper absolute top-3 right-4 z-10 flex h-10 w-10 items-center justify-center backdrop-blur-sm transition-colors sm:top-5 sm:right-6"
      >
        {playing ? (
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
            <path d="M4 3h3v10H4zM9 3h3v10H9z" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="ml-0.5 h-3.5 w-3.5" aria-hidden="true">
            <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
