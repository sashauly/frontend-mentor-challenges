import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="sticky top-0 left-0 p-2 flex justify-between gap-2 bg-background z-50">
      {children}
    </header>
  );
}
