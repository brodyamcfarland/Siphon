"use client";

import {
     TbCircleNumber1,
     TbCircleNumber2,
     TbCircleNumber3,
     TbCircleNumber4,
} from "react-icons/tb";
import { TbShovel } from "react-icons/tb";
import { BsArrowReturnLeft } from "react-icons/bs";
import { htmlTagOptions } from "@/HTML_Options";
import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import cheerio from "cheerio";

interface Props {
     setShowScrape: Dispatch<SetStateAction<boolean>>;
}

const ScrapeForm = ({ setShowScrape }: Props) => {
     const [url, setUrl] = useState<string>("");
     const [htmlTag, setHtmlTag] = useState<string>("");
     const [htmlClass, setHtmlClass] = useState<string>("");
     const [htmlId, setHtmlId] = useState<string>("");
     const [error, setError] = useState<string>("");
     const [loading, setLoading] = useState<boolean>(false);

     const scrape = async () => {
          if (url !== "") {
               try {
                    setLoading(true);
                    setError("");

                    const response = await fetch(
                         `/api/scrape/${encodeURIComponent(url)}`
                    );
                    const html = response.text();
                    console.log(await html);
                    const $ = cheerio.load(await html);

                    // Use cheerio selectors to extract desired data from the response
                    let scrapedData;

                    if (htmlClass !== "") {
                         scrapedData = $(htmlTag + "." + htmlClass).text();
                    } else if (htmlId !== "") {
                         scrapedData = $("#" + htmlId).text();
                    } else {
                         scrapedData = $(htmlTag).text();
                    }

                    console.log(scrapedData);
               } catch (error) {
                    setError("An error occurred during scraping.");
                    console.log(error);
               } finally {
                    setLoading(false);
               }
          }
     };

     return (
          <main className="flex flex-col items-center mt-10 md:mt-20 max-w-xl md:mx-auto text-xs md:text-sm mx-2 gap-4 ">
               <button
                    onClick={() => setShowScrape(false)}
                    className="p-1 px-2 rounded-md text-white  opacity-80 hover:opacity-100 duration-300 text-xs border-2 border-emerald-500"
               >
                    <div className="flex gap-2 items-center justify-center">
                         <span>Return to Instructions</span>
                         <BsArrowReturnLeft size={18} />
                    </div>
               </button>
               <div className="relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/90 to-orange-900/50 rounded-lg blur-lg z-0 animate-custom-pulse"></div>
                    <form className="relative rounded-lg bg-black flex flex-col items-start w-full border border-white/20 py-10 px-5">
                         <div className="flex flex-col w-full gap-3 py-4 px-6 text-gray-200">
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
                                        onChange={(e) => setUrl(e.target.value)}
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
                                   <select
                                        value={htmlTag}
                                        className="ml-8 pl-2 rounded-md text-black focus:bg-emerald-200"
                                        onChange={(e) =>
                                             setHtmlTag(e.target.value)
                                        }
                                   >
                                        <option value="">Select a tag</option>
                                        {htmlTagOptions.map((option, index) => (
                                             <option key={index} value={option}>
                                                  {option}
                                             </option>
                                        ))}
                                   </select>
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
                                                  (ex. "product_price")
                                             </span>
                                        </p>
                                   </div>
                                   <input
                                        type="text"
                                        className="ml-8  pl-2 rounded-md text-black focus:bg-emerald-200"
                                        onChange={(e) =>
                                             setHtmlClass(e.target.value)
                                        }
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
                                                  (ex. "unique_identifier")
                                             </span>
                                        </p>
                                   </div>
                                   <input
                                        type="text"
                                        className="ml-8  pl-2 rounded-md text-black focus:bg-emerald-200"
                                        onChange={(e) =>
                                             setHtmlId(e.target.value)
                                        }
                                   />
                              </div>
                         </div>
                    </form>
               </div>
               <button
                    onClick={() => scrape()}
                    className="my-4 py-2 px-10 rounded-md text-white bg-gradient-to-br from-emerald-800 to-green-900 opacity-80 hover:opacity-100 duration-300 border border-white/20"
               >
                    <div className="flex gap-2 items-center justify-center text-sm ">
                         <span>Scrape</span>
                         <TbShovel size={18} />
                    </div>
               </button>
          </main>
     );
};

export default ScrapeForm;
