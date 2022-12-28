import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link hrf="/">
          <Image
            src="https://links.papareact.com/1m8"
            width={50}
            height={50}
            className="rounded-full"
            alt="logo"
          />
        </Link>
        <h1>The PAPAFAM</h1>
      </div>
    </header>
  );
}

export default Header;
