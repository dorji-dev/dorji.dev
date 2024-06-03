import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ThemeToggle from "@/components/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbLetterD } from "react-icons/tb";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-[100dvh]  w-[100dvw] flex justify-center text-center">
      <div className="w-[50px] xs:w-[64px] sm:w-[12%] flex flex-col border-r">
        <div
          className="top-section pointer-events-none hover:rounded-bl-[20px] hover:bg-foreground/5
          hover:border-primary transition-all duration-500"
        >
          <Link
            href="/"
            className="flex justify-center items-center h-full pointer-events-auto"
          >
            <TbLetterD className="text-[24px]" />
          </Link>
        </div>
        <div className="grow"></div>
        <div
          className="bottom-section pointer-events-none hover:rounded-tl-[50px] hover:bg-foreground/5
          hover:border-primary transition-all duration-500"
        >
          <a
            href="https://twitter.com/dorjidev"
            target="_blank"
            className="flex justify-center items-center h-full pointer-events-auto 
              text-foreground/70 hover:text-foreground transition-colors duration-500"
          >
            <FaXTwitter className="text-[24px]" />
          </a>
        </div>
      </div>
      <div className="grow flex flex-col max-w-[700px]">
        <div className="top-section">
          <SiteHeader />
        </div>
        <ScrollArea className="grow h-full">{children}</ScrollArea>
        <div className="bottom-section flex justify-center items-center">
          <SiteFooter />
        </div>
      </div>
      <div className="w-[50px] xs:w-[64px] sm:w-[12%] flex flex-col border-l">
        <div
          className="top-section pointer-events-none hover:rounded-br-[20px] hover:bg-foreground/5
          hover:border-primary transition-all duration-500"
        >
          <ThemeToggle />
        </div>
        <div className="grow"></div>
        <div
          className="bottom-section pointer-events-none hover:rounded-tr-[50px] hover:bg-foreground/5
          hover:border-primary transition-all duration-500"
        >
          <a
            href="https://github.com/dorji-dev"
            target="_blank"
            className="flex justify-center items-center h-full pointer-events-auto text-foreground/70 
              hover:text-foreground transition-colors duration-500"
          >
            <FaGithub className="text-[24px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
