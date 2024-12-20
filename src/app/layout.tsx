import type { Metadata } from "next";
import Hello from "@/components/hello";
import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";
import config from "@/config";

const { title } = config;
const { description } = config;
const { author } = config;
const { keywords } = config;
const { openGraph } = config;

import "./globals.css";



export const metadata: Metadata = {
  title: title,
  description: description,
  authors: [{ name: author }],
  keywords: keywords,
  openGraph: {
    url: openGraph.url,
    type: "website",
    siteName: openGraph.siteName,
    title: openGraph.title,
    description: openGraph.description,
    images: openGraph.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Panchal | Full Stack Web Developer",
    description:
      "I'm Chun-Ho (Hugo) Lin, a graduate with a Bachelor's degree from National Central University (NCU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
    images: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body>
        <Hello />
        <main>
          <SideBar />
          <div className="main-content">
            <NavBar />
            {children}
          </div>
        </main>
      </body>
      
    </html>
  );
};

export default RootLayout;
