import React, { useEffect, useState } from "react";

export default function IFrameComponent({
  src,
  title,
}: React.DetailedHTMLProps<
  React.IframeHTMLAttributes<HTMLIFrameElement>,
  HTMLIFrameElement
>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <iframe
      className="block bg-black border-none h-screen w-full"
      src={src}
      name={title + "-iframe"}
      title={title}
      loading="lazy"
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
}
