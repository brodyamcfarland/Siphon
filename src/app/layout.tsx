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
               <body className="h-screen w-full flex flex-col bg-black font-semibold relative scrollbar-thin scrollbar-track-green-900/50 scrollbar-thumb-emerald-600/80 scrollbar-thumb">
                    <Header />
                    <div className="flex-1">{children}</div>
                    <div className="absolute bg-gradient-to-r from-orange-900/50 to-green-800/70 w-full h-1/6 -z-10 top-1/3 blur-2xl animate-custom-pulse animate-grow-shrink" />
               </body>
          </html>
     );
}
