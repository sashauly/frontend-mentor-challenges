import React, { useCallback, useEffect, useRef, useState } from "react";

export default function IFrameComponent(
  props: React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >
) {
  const [mounted, setMounted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const toggleFullscreenButtonRef = useRef<HTMLButtonElement>(null);

  const toggleFullscreen = useCallback(() => {
    try {
      const container = containerRef.current;
      const iframe = container?.querySelector("iframe");

      const requestFullscreen = container?.requestFullscreen;
      const exitFullscreen = document.exitFullscreen;

      if (!document.fullscreenElement && requestFullscreen && iframe) {
        requestFullscreen?.call(container);
      } else if (exitFullscreen) {
        exitFullscreen.call(document);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    const toggleFullscreenButton = toggleFullscreenButtonRef.current;
    if (toggleFullscreenButton) {
      toggleFullscreen();
    }
  }, [toggleFullscreen]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      id="container"
      className="relative w-full h-screen bg-background p-4"
    >
      <button
        ref={toggleFullscreenButtonRef}
        id="toggle-fullscreen"
        onClick={toggleFullscreen}
        aria-label="Toggle fullscreen view"
        className="absolute top-6 left-6 flex gap-2 p-2 bg-foreground text-background rounded-xl z-20"
      >
        {/* Fullscreen emoji */}
        <span>&#x26F6;</span>
        <span>Toggle Fullscreen</span>
      </button>
      <iframe
        className="block w-full h-full bg-background border-none z-10"
        {...props}
        src={props.src}
        name={props.title + "-iframe"}
        title={props.title}
        loading="lazy"
        allowFullScreen
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}
