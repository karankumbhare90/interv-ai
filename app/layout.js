import { Poppins } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata = {
  title: "Interv AI",
  description: "Interv AI is a platform for creating and managing interviews.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
      ><StackProvider app={stackServerApp}><StackTheme>
        {children}
      </StackTheme></StackProvider></body>
    </html>
  );
}
