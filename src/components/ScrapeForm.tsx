"use client";

import {
     TbCircleNumber1,
     TbCircleNumber2,
     TbCircleNumber3,
     TbCircleNumber4,
} from "react-icons/tb";
import { FiCopy } from "react-icons/fi";
import { PuffLoader } from "react-spinners";
import { TbShovel } from "react-icons/tb";
import { BsArrowReturnLeft } from "react-icons/bs";
import { htmlTagOptions } from "@/HTML_Options";
import { Dispatch, SetStateAction, useState } from "react";
import cheerio from "cheerio";
import toast from "react-hot-toast";
interface Props {
     setShowScrape: Dispatch<SetStateAction<boolean>>;
}

const ScrapeForm = ({ setShowScrape }: Props) => {
     const [url, setUrl] = useState<string>("");
     const [htmlTag, setHtmlTag] = useState<string>("");
     const [htmlClass, setHtmlClass] = useState<string>("");
     const [htmlId, setHtmlId] = useState<string>("");
     const [showHtmlResults, setShowHtmlResults] = useState<boolean>(false);
     const [htmlResults, setHtmlResults] = useState<string>("");
     const [error, setError] = useState<string>("");
     const [loading, setLoading] = useState<boolean>(false);
     const [copied, setCopied] = useState<boolean>(false);

     const scrape = async () => {
          if (url === "" || !url.includes("https://")) {
               setError("URL");
               toast.error("The URL is not valid.");
               return;
          }
          if (htmlTag === "") {
               setError("TAG");
               toast.error("Please choose an HTML Tag.");
               return;
          }
          try {
               setLoading(true);
               setCopied(false);
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
               const tagsArray = scrapedData.split(/(?=[A-Z])/);
               const formattedData = tagsArray.join("\n");
               setHtmlResults(formattedData);
          } catch (error) {
               setError("SCRAPEFAIL");
               toast.error("Something went wrong during scrape");
               console.log(error);
          } finally {
               setLoading(false);
               setShowHtmlResults(true);
               setError("");
               toast.success("Scrape Successful!");
          }
     };

     const copyToClipboard = async () => {
          try {
               await navigator.clipboard.writeText(htmlResults);
               setCopied(true);
               toast.success("Copied to clipboard!");
          } catch (error) {
               toast.error("Failed to copy to clipboard.");
               console.error(error);
          }
     };

     return (
          <main className="flex flex-col items-center mt-6 md:mt-20 max-w-xl md:mx-auto text-xs md:text-sm mx-2">
               <button
                    onClick={() => setShowScrape(false)}
                    className="p-1 px-2 rounded-md text-white  opacity-80 hover:opacity-100 duration-300 text-xs border-2 border-emerald-500 mb-4"
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
                                             Website Url{" "}
                                             <span className="text-orange-500 font-bold text-xs">
                                                  (Required)
                                             </span>
                                        </p>
                                   </div>
                                   <input
                                        type="text"
                                        className={`ml-8 pl-2 rounded-md text-black focus:bg-emerald-200 ${
                                             error === "URL" &&
                                             "ring-2 ring-red-500 bg-red-300"
                                        }`}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder="https://www.xyz.com/products"
                                   />
                              </div>
                              <div className="flex flex-col ">
                                   <div className="flex items-center gap-2">
                                        <TbCircleNumber2
                                             size={24}
                                             className="text-emerald-600 shrink-0"
                                        />
                                        <p>HTML Tag</p>
                                        <span className="text-orange-500 font-bold text-xs">
                                             (Required)
                                        </span>
                                   </div>
                                   <select
                                        value={htmlTag}
                                        className={`ml-8 pl-2 rounded-md text-black focus:bg-emerald-200 ${
                                             error === "TAG" &&
                                             "ring-2 ring-red-500 bg-red-300"
                                        }`}
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
                                                  (Optional)
                                             </span>
                                        </p>
                                   </div>
                                   <input
                                        type="text"
                                        className="ml-8  pl-2 rounded-md text-black focus:bg-emerald-200"
                                        onChange={(e) =>
                                             setHtmlClass(e.target.value)
                                        }
                                        placeholder="product_price"
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
                                                  (optional)
                                             </span>
                                        </p>
                                   </div>
                                   <input
                                        type="text"
                                        className="ml-8  pl-2 rounded-md text-black focus:bg-emerald-200"
                                        onChange={(e) =>
                                             setHtmlId(e.target.value)
                                        }
                                        placeholder="unique_identifier"
                                   />
                              </div>
                         </div>
                    </form>
               </div>
               {showHtmlResults && (
                    <div className="max-w-xs md:max-w-lg w-full bg-[#0d140c] text-white flex flex-col p-4 border-r border-l border-b border-white/20 rounded-b-md">
                         <span className="text-center">
                              Showing HTML Results for:
                         </span>
                         <span className="text-xs text-center text-gray-400">
                              Tag Name: {`<${htmlTag}>`}
                         </span>
                         {htmlClass !== "" && (
                              <span className="text-xs text-center text-gray-400">
                                   Class Name: {htmlClass}
                              </span>
                         )}
                         {htmlId !== "" && (
                              <span className="text-xs text-center text-gray-400">
                                   Id Name: {htmlId}
                              </span>
                         )}
                         <div className="relative text-xs p-3 pb-10 rounded-md border border-white/20 bg-black mt-4">
                              {loading ? (
                                   <div className="flex flex-col items-center justify-center">
                                        <PuffLoader
                                             color="white"
                                             size={30}
                                             speedMultiplier={0.9}
                                        />
                                        <span className="uppercase text-[8px] tracking-widest animate-pulse">
                                             Loading
                                        </span>
                                   </div>
                              ) : (
                                   <p className="overflow-y-auto scrollbar-thin scrollbar-track-green-900/50 scrollbar-thumb-emerald-600/80 max-h-[13rem] whitespace-pre-wrap">
                                        {htmlResults.length === 0 ? (
                                             <span className="text-center flex items-center justify-center uppercase text-[10px] tracking-widest ">
                                                  No Results found
                                             </span>
                                        ) : (
                                             <>{htmlResults}</>
                                        )}
                                   </p>
                              )}

                              <button
                                   onClick={copyToClipboard}
                                   className="absolute bottom-0 right-0 rounded-br-md p-1 border-white/20 flex gap-2 items-center justify-end border hover:border-white hover:bg-white/20 duration-300"
                              >
                                   <span>{copied ? "Copied" : "Copy"}</span>
                                   <FiCopy />
                              </button>
                         </div>
                    </div>
               )}
               <button
                    onClick={() => scrape()}
                    className="my-4 py-2 px-10 rounded-md text-white bg-gradient-to-br from-emerald-800 to-green-900 opacity-80 hover:opacity-100 duration-300 border border-white/20 disabled:opacity-30"
                    disabled={!url || !htmlTag}
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
