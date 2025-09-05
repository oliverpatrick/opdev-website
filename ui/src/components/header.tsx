"use client";

import { useState, useEffect } from "react";
import { getTimeAndDate } from "@/utils/helpers/formatting";
import ConsoleHostname from "./console-hostname";
import packageJson from "../../package.json";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [loginTime, setLoginTime] = useState("");

  useEffect(() => {
    setMounted(true);
    setLoginTime(getTimeAndDate());
  }, []);

  return (
    <div className="h-full border-2 rounded-md overflow-auto">
      <div className="w-full h-auto flex justify-start p-2 bg-gray-100 border-b border-gray-300">
        <div className="flex flex-row space-x-1">
          <div className="h-3 w-3 bg-red-600 rounded-full hover:bg-red-400"></div>
          <div className="h-3 w-3 bg-amber-600 rounded-full hover:bg-amber-400"></div>
          <div className="h-3 w-3 bg-green-600 rounded-full hover:bg-green-400"></div>
        </div>
      </div>
      <div className="p-4">
        <p className="whitespace-pre text-[9px] sm:text-xs md:text-sm">
          {mounted
            ? `Last login: ${loginTime} on ttys000

 ██████╗  ██╗     ██╗██╗   ██╗███████╗██████╗
██╔═══██╗ ██║     ██║██║   ██║██╔════╝██╔══██╗
██║   ██║ ██║     ██║██║   ██║█████╗  ██████╔╝
██║   ██║ ██║     ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
╚██████╔╝ ███████╗██║ ╚████╔╝ ███████╗██║  ██║
 ╚═════╝  ╚══════╝╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
`
            : `Last login: Loading... on ttys000

 ██████╗  ██╗     ██╗██╗   ██╗███████╗██████╗
██╔═══██╗ ██║     ██║██║   ██║██╔════╝██╔══██╗
██║   ██║ ██║     ██║██║   ██║█████╗  ██████╔╝
██║   ██║ ██║     ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
╚██████╔╝ ███████╗██║ ╚████╔╝ ███████╗██║  ██║
 ╚═════╝  ╚══════╝╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
`}
          {`
██████╗   █████╗ ████████╗██████╗ ██╗ ██████╗██╗  ██╗
██╔══██╗ ██╔══██╗╚══██╔══╝██╔══██╗██║██╔════╝██║ ██╔╝
██████╔╝ ███████║   ██║   ██████╔╝██║██║     █████╔╝
██╔═══╝  ██╔══██║   ██║   ██╔═██╗ ██║██║     ██╔═██╗
██║      ██║  ██║   ██║   ██║  ██╗██║╚██████╗██║  ██╗
╚═╝      ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ v${packageJson.version}

`}
        </p>

        <ConsoleHostname />
      </div>
    </div>
  );
}
