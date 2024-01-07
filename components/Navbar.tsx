import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          ></Image>
          <p className="text-2xl font-normal">
            Shop<span className="text-primary">Buddy</span>
          </p>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
