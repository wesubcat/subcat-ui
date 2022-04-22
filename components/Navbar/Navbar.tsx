import Link from "next/link";

export const Navbar = (): JSX.Element => {
  return (
    <nav>
      <ul className="flex flex-row text-2xl text-primary-text-color">
        <li>
          <Link href="/">
            <a className="mr-10">home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="mr-10">auctions</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="mr-10">wtf</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>opensea</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
