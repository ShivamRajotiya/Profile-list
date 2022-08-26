import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image  id ="img"src="/logo2.png" alt="site logo" width={128} height={60} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas/">
        <a>Users List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
