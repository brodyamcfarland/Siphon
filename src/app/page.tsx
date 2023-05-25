"use client";

import { useState } from "react";
import ScrapeForm from "@/components/ScrapeForm";
import About from "@/components/About";
import { Toaster } from "react-hot-toast";

export default function Home() {
     const [showScrape, setShowScrape] = useState<boolean>(false);

     return (
          <>
               {showScrape ? (
                    <>
                         <ScrapeForm setShowScrape={setShowScrape} />
                    </>
               ) : (
                    <About setShowScrape={setShowScrape} />
               )}
               <Toaster />
          </>
     );
}
