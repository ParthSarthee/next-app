"use client";
import Link from "next/link";

function Home() {

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      Home Page
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}


export default Home;
