import { FaGasPump } from "react-icons/fa";

const Header = () => {
     return (
          <header className="flex flex-col items-center justify-center pt-2">
               <div className="flex gap-2 items-center justify-center">
                    <h1 className="tracking-widest text-2xl text-gray-600">
                         SIPHON
                    </h1>
                    <FaGasPump size={25} className="text-emerald-200" />
               </div>
               <h2 className="text-xs text-gray-300">Free HTML Web Scraper</h2>
          </header>
     );
};

export default Header;
