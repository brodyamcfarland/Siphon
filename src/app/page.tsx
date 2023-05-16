import {
     TbCircleNumber1,
     TbCircleNumber2,
     TbCircleNumber3,
     TbCircleNumber4,
     TbCircleNumber5,
} from "react-icons/tb";
import { BiRightArrow } from "react-icons/bi";

export default function Home() {
     return (
          <main className="flex flex-col items-center mt-10 border border-emerald-300 max-w-xl mx-auto text-sm">
               <h1 className="text-white text-md pt-2">About</h1>
               <p className="p-4 border-b border-emerald-300">
                    Siphon is a free to use web scraping tool used to find
                    specific information hidden in the HTML on any webpage. It
                    then converts the scraped information into JSON format and
                    can be copied to your clipboard.
               </p>
               <h1 className="text-white text-md pt-2">How to Scrape</h1>
               <article className="flex flex-col gap-3 p-4 border-b border-emerald-300">
                    <div className="flex gap-1">
                         <TbCircleNumber1
                              size={24}
                              className="text-orange-800 shrink-0"
                         />
                         <p>Go to the website you want to scrape data from</p>
                    </div>
                    <div className="flex gap-1">
                         <TbCircleNumber2
                              size={24}
                              className="text-orange-800 shrink-0"
                         />
                         <p>
                              Right Click and Inspect or F12 on Keyboard and go
                              to elements tab
                         </p>
                    </div>
                    <div className="flex gap-1">
                         <TbCircleNumber3
                              size={24}
                              className="text-orange-800 shrink-0"
                         />
                         <p>
                              Look for the HTML tags that contain your target
                              data ex. (div, a, img)
                         </p>
                    </div>
                    <div className="flex gap-1">
                         <TbCircleNumber4
                              size={24}
                              className="text-orange-800 shrink-0"
                         />
                         <p>
                              Look for common classes or ids attached to the
                              html element associated with the information you
                              need
                         </p>
                    </div>
                    <div className="flex gap-1">
                         <TbCircleNumber5
                              size={24}
                              className="text-orange-800 shrink-0"
                         />
                         <p>
                              Input the URL, any applicable HTML Tags, Classes,
                              or IDs and click 'Scrape'
                         </p>
                    </div>
               </article>
               <button className="my-4 p-2 rounded-md text-white bg-gradient-to-br from-emerald-800 to-emerald-500 opacity-80 hover:opacity-100 duration-300">
                    <div className="flex gap-2 items-center justify-center">
                         <span>Continue</span>
                         <BiRightArrow />
                    </div>
               </button>
          </main>
     );
}
