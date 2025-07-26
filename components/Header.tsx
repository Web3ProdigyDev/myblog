import Image from "next/image";
import Link from "next/link";
import logoLight from "../public/images/logoLight.png";
import profileImg from "../public/images/user.png";

const Header = () => {
  return (
    <div className="w-full h-20 border-b-[1px] border-b-primaryColor/30 bg-bgColor text-textColor font-titleFont sticky top-0 z-50 px-4 shadow-sm">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={60} height={60} src={logoLight} alt="Web3ProdigyDev logo" className="object-contain" />
          </div>
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
          <div className="flex items-center gap-1">
            <div className="p-[2px] rounded-full border-[2px] border-primaryColor shadow-sm">
              <Image
                src={profileImg}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>


            <p className="text-sm font-medium">Hello Stranger!</p>
          </div>

          <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold text-primaryColor hover:text-bgColor rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-secondaryColor/80">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;