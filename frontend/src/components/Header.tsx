import Link from "next/link";

export default function Header() {
  return (
    <header className="container-fluid bg-primary d-flex flex-column justify-content-center align-items-center text-light py-3">
      <h1>Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
