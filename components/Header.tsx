import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/logoDark.png";

const Header = () => {
  return (
    <div className="w-full h-20 border-b-[1px] border-b-primaryColor/20 font-titleFont sticky top-0 bg-bgColor z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={80} height={80} src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <nav>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold text-textColor">
            <li className="headerLi hover:text-secondaryColor transition-colors duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="headerLi hover:text-secondaryColor transition-colors duration-300">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="headerLi hover:text-secondaryColor transition-colors duration-300">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="headerLi hover:text-secondaryColor transition-colors duration-300">
              <Link href="/features">Features</Link>
            </li>
            <li className="headerLi hover:text-secondaryColor transition-colors duration-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-8 text-lg text-textColor">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src="https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
              alt="profile"
            />
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