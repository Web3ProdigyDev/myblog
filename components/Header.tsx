import Image from "next/image";
import Link from "next/link";
import logoLight from "../public/images/logoLight.png";
import profileImg from "../public/images/user.png";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

const Header = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect viewport changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg breakpoint
    const handleResize = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    setIsDesktop(mediaQuery.matches); // Set initial value
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: window.location.href });
  };

  return (
    <div className="w-full h-20 border-b-[1px] border-b-primaryColor/30 bg-bgColor text-textColor font-titleFont sticky top-0 z-50 px-4 shadow-sm">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            width={60}
            height={60}
            src={logoLight}
            alt="Web3ProdigyDev logo"
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden ${isDesktop ? "lg:flex" : "lg:hidden"}`}>
          <ul className="flex gap-8 uppercase text-sm font-semibold">
            <li className="headerLi">
              <Link href="/">Home</Link>
            </li>
            <li className="headerLi">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="headerLi">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="headerLi">
              <Link href="/features">Features</Link>
            </li>
            <li className="headerLi">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden flex items-center ${isDesktop ? "hidden" : "block"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden absolute top-20 left-0 w-full bg-bgColor border-b border-primaryColor/30 transition-all duration-300 ease-in-out ${isMenuOpen && !isDesktop ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 uppercase text-sm font-semibold">
            <li className="headerLi">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="headerLi">
              <Link href="/posts" onClick={() => setIsMenuOpen(false)}>
                Posts
              </Link>
            </li>
            <li className="headerLi">
              <Link href="/pages" onClick={() => setIsMenuOpen(false)}>
                Pages
              </Link>
            </li>
            <li className="headerLi">
              <Link href="/features" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
            </li>
            <li className="headerLi">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-4 text-lg text-textColor">
          <div className="flex items-center gap-2">
            <div className="p-[2px] rounded-full border-[2px] border-primaryColor shadow-sm">
              <Image
                src={user?.image || profileImg}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-sm font-medium hidden sm:block">
              {user?.name || user?.email || "Hello Stranger!"}
            </p>
          </div>

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="uppercase text-xs sm:text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-3 sm:px-4 py-1 font-semibold text-primaryColor hover:text-bgColor rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-secondaryColor/80"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              className="uppercase text-xs sm:text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-3 sm:px-4 py-1 font-semibold text-primaryColor hover:text-bgColor rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-secondaryColor/80"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;