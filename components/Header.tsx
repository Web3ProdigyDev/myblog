import Image from "next/image";
import Link from "next/link";
import logoLight from "../public/images/logoLight.png";
import profileImg from "../public/images/user.png";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;

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

        <nav>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
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

        <div className="flex items-center gap-8 text-lg text-textColor">
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
            <p className="text-sm font-medium">
              {user?.name || user?.email || "Hello Stranger!"}
            </p>
          </div>

          {session ? (
            <button
              onClick={() => signOut()}
              className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold text-primaryColor hover:text-bgColor rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-secondaryColor/80"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold text-primaryColor hover:text-bgColor rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-secondaryColor/80"
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
