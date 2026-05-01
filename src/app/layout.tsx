import type { Metadata } from "next";
import { Inter, Fira_Code, Playfair_Display } from "next/font/google"; // Added Playfair Display
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Spotlight from "@/components/ui/spotlight";
import ScrollProgress from "@/components/ui/scroll-progress";
import SplashCursor from "@/components/SplashCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Nithin Varughese | Data Scientist & Analyst",
  description: "Portfolio of Nithin Varughese, a Data Scientist & Analyst specializing in ML, AI, and Data Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, firaCode.variable, playfair.variable, "bg-background text-foreground antialiased font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll>
            <SplashCursor />
            <ScrollProgress />
            <Spotlight />
            <Navbar />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
