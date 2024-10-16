import { blogPreviewCardUrl } from "@/pages/blog-preview-card";
import { qrCodeComponentUrl } from "@/pages/qr-code-component";
import { socialLinksProfileUrl } from "@/pages/social-links-profile";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href={`/${qrCodeComponentUrl}`}>qr-code-component</Link>
        </li>
        <li>
          <Link href={`/${blogPreviewCardUrl}`}>blog-preview-card</Link>
        </li>
        <li>
          <Link href={`/${socialLinksProfileUrl}`}>social-links-profile</Link>
        </li>
      </ul>
    </nav>
  );
}
