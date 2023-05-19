"use client";

import { useState } from "react";
import ScrapeForm from "@/components/ScrapeForm";
import About from "@/components/About";

// !    TODO
// Work on logic for the web scrape function and put it in its own component

export default function Home() {
     const [showScrape, setShowScrape] = useState<boolean>(false);
     return (
          <>
               {showScrape ? (
                    <ScrapeForm setShowScrape={setShowScrape} />
               ) : (
                    <About setShowScrape={setShowScrape} />
               )}
          </>
     );
}
