import {
     TbCircleNumber1,
     TbCircleNumber2,
     TbCircleNumber3,
     TbCircleNumber4,
     TbCircleNumber5,
} from "react-icons/tb";
import { BiRightArrow } from "react-icons/bi";
import { Dispatch, SetStateAction } from "react";

interface Props {
     setShowScrape: Dispatch<SetStateAction<boolean>>;
}

const About = ({ setShowScrape }: Props) => {
     return (
          <main className="flex flex-col items-center mt-6 md:mt-20 max-w-xl md:mx-auto text-xs md:text-sm mx-2 gap-4">
               <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/90 to-orange-900/50 rounded-lg blur-lg z-0 animate-custom-pulse"></div>

                    <div className="rounded-lg bg-black max-w-md border border-white/20 relative z-10">
                         <p className="relative p-4 text-gray-300 text-xs">
                              Siphon is a free to use web scraping tool used to
                              find specific information hidden in the HTML on
                              any webpage. It then converts the scraped
                              information into JSON format and can be copied to
                              your clipboard.
                         </p>
                    </div>
               </div>
               <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-emerald-600/90 to-orange-900/50 rounded-lg blur-lg z-0 animate-custom-pulse"></div>
                    <div className="relative rounded-lg bg-black flex flex-col items-center border border-white/20 py-10 px-5">
                         <h1 className="text-md uppercase tracking-widest text-emerald-600">
                              How to Scrape
                         </h1>
                         <article className="flex flex-col gap-3 p-4 text-gray-300">
                              <div className="flex gap-2 items-center">
                                   <TbCircleNumber1
                                        size={24}
                                        className="text-emerald-600 shrink-0"
                                   />
                                   <p>
                                        Go to the website you want to scrape
                                        data from
                                   </p>
                              </div>
                              <div className="flex gap-2 items-center">
                                   <TbCircleNumber2
                                        size={24}
                                        className="text-emerald-600 shrink-0"
                                   />
                                   <p>
                                        Right Click and Inspect or F12 on
                                        Keyboard and go to elements tab
                                   </p>
                              </div>
                              <div className="flex gap-2 items-center">
                                   <TbCircleNumber3
                                        size={24}
                                        className="text-emerald-600 shrink-0"
                                   />
                                   <p>
                                        Look for the HTML tags that contain your
                                        target data ex. (div, a, img)
                                   </p>
                              </div>
                              <div className="flex gap-2 items-center">
                                   <TbCircleNumber4
                                        size={24}
                                        className="text-emerald-600 shrink-0"
                                   />
                                   <p>
                                        Look for common classes or ids attached
                                        to the html element associated with the
                                        information you need
                                   </p>
                              </div>
                              <div className="flex gap-2 items-center">
                                   <TbCircleNumber5
                                        size={24}
                                        className="text-emerald-600 shrink-0"
                                   />
                                   <p>
                                        Input the URL, any applicable HTML Tags,
                                        Classes, or IDs and click 'Scrape'
                                   </p>
                              </div>
                         </article>
                    </div>
               </div>
               <button
                    onClick={() => setShowScrape(true)}
                    className="my-4 py-2 px-10 rounded-md text-white bg-gradient-to-br from-emerald-800 to-green-900 opacity-80 hover:opacity-100 duration-300 border border-white/20"
               >
                    <div className="flex gap-2 items-center justify-center">
                         <span>Continue to Scrape Form</span>
                         <BiRightArrow size={18} />
                    </div>
               </button>
          </main>
     );
};

export default About;
