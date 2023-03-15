import Link from "next/link";

export default function Header() {


  return (
    <div className="w-full sticky flex flex-row justify-between">
      <Link href="/">
        Main
      </Link>
      <Link href="/tokenomics">
        Tokenomics
      </Link>
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
