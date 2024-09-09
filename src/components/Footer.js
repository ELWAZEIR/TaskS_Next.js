"use client";

import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [counter, setCounter] = useState(0);
  return (
    <footer>
      <h2>Footer</h2>
      <div>
        <button onClick={() => setCounter((c) => c + 1)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter((c) => c - 1)}>-</button>
      </div>
      <Link href={`/posts/${counter}`}>Go To Post No {counter}</Link>
    </footer>
  );
}

export default Footer;
