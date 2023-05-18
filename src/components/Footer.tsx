import Link from "next/link";
import {
     AiFillGithub,
     AiFillTwitterCircle,
     AiFillLinkedin,
     AiFillInfoCircle,
} from "react-icons/ai";

const Footer = () => {
     return (
          <nav className="flex justify-center items-center pb-2">
               <ul className="flex scale-75 md:scale-100 space-x-2 md:space-x-4 text-gray-300">
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
     );
};

export default Footer;
