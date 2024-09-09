"use client";

import Link from "next/link";

function Error() {
  return (
    <div>
      <h2>Something  wrong!</h2>
      <button>
        <Link href="/">Home</Link>
      </button>
    </div>
  );
}

export default Error;
