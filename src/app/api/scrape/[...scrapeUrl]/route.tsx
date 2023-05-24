import { NextResponse } from "next/server";

export async function GET(request: Request, { params }) {
     console.log(`>> Siphoning HTML from: ${params.scrapeUrl}.........`);
     try {
          const response = await fetch(`${params.scrapeUrl}`);
          const html = await response.text();
          // Return the HTML content in the API response
          return new Response(html, {
               status: 200,
               headers: {
                    "Content-Type": "text/html",
               },
          });
     } catch (error) {
          console.error(error);
          return NextResponse.json({
               response: `Scrape Failed for: ${params} `,
          });
     }
}
