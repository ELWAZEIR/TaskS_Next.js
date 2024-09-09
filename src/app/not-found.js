import Link from "next/link";

function notFound() {
  return (
    <div>
      <h2>Page Not Found 404</h2>
      <button>
        <Link href="/">Home Page</Link>
      </button>
    </div>
  );
}

export default notFound;
