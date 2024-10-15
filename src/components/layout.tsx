import Image from "next/image";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>
        <Image src="" alt="logo" />
        <h1>Frontend Mentors Challenges</h1>
        <Navbar />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
