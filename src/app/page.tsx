"use client";

import {
     TbCircleNumber1,
     TbCircleNumber2,
     TbCircleNumber3,
     TbCircleNumber4,
     TbCircleNumber5,
} from "react-icons/tb";
import { TbShovel } from "react-icons/tb";
import { BsArrowReturnLeft } from "react-icons/bs";
import { BiRightArrow } from "react-icons/bi";
import { useState } from "react";

export default function Home() {
     const [showScrape, setShowScrape] = useState<boolean>(false);
     const [url, setUrl] = useState<string>("");
     const [html, setHtml] = useState<string>("");
     const [htmlClass, setHtmlClass] = useState<string>("");
     const [htmlId, setHtmlId] = useState<string>("");

     return (
          <>
               {showScrape ? (
                    <main className="flex flex-col items-center mt-4 md:mt-10 max-w-xl md:mx-auto text-xs md:text-sm mx-2 gap-4">
                         <button
                              onClick={() => setShowScrape(false)}
                              className="p-1 rounded-md text-white  opacity-80 hover:opacity-100 duration-300 text-xs border-2 border-emerald-500"
                         >
                              <div className="flex gap-2 items-center justify-center">
                                   <span>Return to Instructions</span>
                                   <BsArrowReturnLeft size={18} />
                              </div>
                         </button>

                         <div className="rounded-lg bg-gray-900 flex flex-col items-start w-full">
                              <article className="flex flex-col w-full gap-3 py-4 px-6 text-gray-200">
                                   <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                             <TbCircleNumber1
                                                  size={24}
                                                  className="text-emerald-600 shrink-0"
                                             />
                                             <p>
                                                  Website Url
                                                  <span className="text-xs pl-2 text-gray-400">
                                                       (https://www.xyz.com/products)
                                                  </span>
                                             </p>
                                        </div>
                                        <input
                                             type="text"
                                             className="ml-8 pl-2 rounded-md text-black focus:bg-emerald-200"
                                        />
                                   </div>
                                   <div className="flex flex-col ">
                                        <div className="flex items-center gap-2">
                                             <TbCircleNumber2
                                                  size={24}
                                                  className="text-emerald-600 shrink-0"
                                             />
                                             <p>HTML Tag</p>
                                        </div>
                                        <input
                                             type="text"
                                             className="ml-8 pl-2 rounded-md text-black focus:bg-emerald-200"
                                        />
                                   </div>
                                   <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                             <TbCircleNumber3
                                                  size={24}
                                                  className="text-emerald-600 shrink-0"
                                             />
                                             <p>
                                                  Class
                                                  <span className="text-xs pl-2 text-gray-400">
                                                       (ex.
                                                       class="product_price")
                                                  </span>
                                             </p>
                                        </div>
                                        <input
                                             type="text"
                                             className="ml-8  pl-2 rounded-md text-black focus:bg-emerald-200"
                                        />
                                   </div>
                                   <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                             <TbCircleNumber4
                                                  size={24}
                                                  className="text-emerald-600 shrink-0"
                                             />
                                             <p>
                                                  Id
                                                  <span className="text-xs pl-2 text-gray-400 ">
                                                       (ex.
                                                       id="unique_identifier")
                                                  </span>
                                             </p>
                                        </div>
                                        <input
                                             type="text"
                                             className="ml-8  pl-2 rounded-md text-black focus:bg-emerald-200"
                                        />
                                   </div>
                              </article>
                         </div>
                         <button
                              onClick={() => setShowScrape(true)}
                              className="my-4 p-2 rounded-md text-white bg-gradient-to-br from-emerald-800 to-emerald-500 opacity-80 hover:opacity-100 duration-300"
                         >
                              <div className="flex gap-2 items-center justify-center text-sm">
                                   <span>Scrape</span>
                                   <TbShovel size={18} />
                              </div>
                         </button>
                    </main>
               ) : (
                    <main className="flex flex-col items-center mt-4 md:mt-10 max-w-xl md:mx-auto text-xs md:text-sm mx-2 gap-4">
                         <div className="rounded-lg bg-gray-800 max-w-md">
                              <p className="p-4 text-gray-300 text-xs">
                                   Siphon is a free to use web scraping tool
                                   used to find specific information hidden in
                                   the HTML on any webpage. It then converts the
                                   scraped information into JSON format and can
                                   be copied to your clipboard.
                              </p>
                         </div>
                         <div className="rounded-lg bg-gray-900 flex flex-col items-center">
                              <h1 className="text-white text-md pt-2">
                                   How to Scrape
                              </h1>
                              <article className="flex flex-col gap-3 p-4 text-gray-300">
                                   <div className="flex gap-2 items-center">
                                        <TbCircleNumber1
                                             size={24}
                                             className="text-emerald-600 shrink-0"
                                        />
                                        <p>
                                             Go to the website you want to
                                             scrape data from
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
                                             Look for the HTML tags that contain
                                             your target data ex. (div, a, img)
                                        </p>
                                   </div>
                                   <div className="flex gap-2 items-center">
                                        <TbCircleNumber4
                                             size={24}
                                             className="text-emerald-600 shrink-0"
                                        />
                                        <p>
                                             Look for common classes or ids
                                             attached to the html element
                                             associated with the information you
                                             need
                                        </p>
                                   </div>
                                   <div className="flex gap-2 items-center">
                                        <TbCircleNumber5
                                             size={24}
                                             className="text-emerald-600 shrink-0"
                                        />
                                        <p>
                                             Input the URL, any applicable HTML
                                             Tags, Classes, or IDs and click
                                             'Scrape'
                                        </p>
                                   </div>
                              </article>
                         </div>
                         <button
                              onClick={() => setShowScrape(true)}
                              className="my-4 p-2 rounded-md text-white bg-gradient-to-br from-emerald-800 to-emerald-500 opacity-80 hover:opacity-100 duration-300"
                         >
                              <div className="flex gap-2 items-center justify-center">
                                   <span>Continue to Scrape Form</span>
                                   <BiRightArrow size={18} />
                              </div>
                         </button>
                    </main>
               )}
          </>
     );
}
