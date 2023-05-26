import { FaGasPump } from "react-icons/fa";
import Link from "next/link";
import {
     AiFillGithub,
     AiFillTwitterCircle,
     AiFillLinkedin,
     AiFillInfoCircle,
} from "react-icons/ai";

const Header = () => {
     return (
          <header className="flex w-full max-w-3xl justify-between mx-2 md:mx-auto items-center">
               <div className="flex flex-col items-center justify-center pt-3">
                    <div className="flex gap-2 items-center justify-center">
                         <h1 className="tracking-widest text-2xl text-gray-500">
                              SIPHON
                         </h1>
                         <FaGasPump size={25} className="text-emerald-200" />
                    </div>
                    <h2 className="text-[9px] text-emerald-500 uppercase tracking-widest">
                         Free HTML Web Scraper
                    </h2>
               </div>
               <nav className="flex justify-center items-center pb-2 pr-4 md:pr-0">
                    <ul className="flex space-x-2 md:space-x-4 text-emerald-500">
                         <li>
                              <Link href="https://github.com/brodyamcfarland/Siphon">
                                   <AiFillGithub
                                        size={30}
                                        className="hover:scale-75 duration-500"
                                        title="Github"
                                   />
                              </Link>
                         </li>
                         <li>
                              <Link href="https://twitter.com/off2eth">
                                   <AiFillTwitterCircle
                                        size={30}
                                        className="hover:scale-75 duration-500"
                                        title="Twitter"
                                   />
                              </Link>
                         </li>
                         <li>
                              <Link href="https://www.linkedin.com/in/brody-mcfarland-93a91b106/">
                                   <AiFillLinkedin
                                        size={30}
                                        className="hover:scale-75 duration-500"
                                        title="LinkedIn"
                                   />
                              </Link>
                         </li>
                         <li>
                              <Link href="/about">
                                   <AiFillInfoCircle
                                        size={30}
                                        className="hover:scale-75 duration-500"
                                        title="About"
                                   />
                              </Link>
                         </li>
                    </ul>
               </nav>
          </header>
     );
};

export default Header;
