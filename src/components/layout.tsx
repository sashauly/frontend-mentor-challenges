import Image from "next/image";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

import React from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>
        <div className="flex gap-2">
          <Link href="/">
            <Image src="" alt="logo" />
          </Link>
          <h1>Frontend Mentor Challenges</h1>
        </div>
        <Navbar />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
