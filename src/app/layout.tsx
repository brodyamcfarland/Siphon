import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
     title: "Siphon",
     description: "HTML Web Scraper App",
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="en">
               <body className="h-screen w-full flex flex-col bg-black font-semibold">
                    <Header />
                    <div className="flex-1">{children}</div>
               </body>
          </html>
     );
}
