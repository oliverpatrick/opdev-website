import { useState, useEffect } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const terminalVariants = cva(
  "h-full border rounded-xl overflow-auto shadow-2xl w-full max-w-3xl", // base styles
  {
    variants: {
      theme: {
        light: "border-gray-300",
        dark: "border-gray-700",
      },
    },
    defaultVariants: {
      theme: "light",
    },
  },
);

const titleBarVariants = cva("w-full h-auto flex justify-start p-2 border-b", {
  variants: {
    theme: {
      light: "bg-gray-100 border-gray-300",
      dark: "bg-[#333436] border-gray-700",
    },
  },
  defaultVariants: {
    theme: "light",
  },
});

const bodyVariants = cva("p-4", {
  variants: {
    theme: {
      light: "bg-white text-gray-900",
      dark: "bg-[#353738] text-gray-100",
    },
  },
  defaultVariants: {
    theme: "light",
  },
});

export type TerminalProps = VariantProps<typeof terminalVariants> & {
  time: string;
  version: string;
  cmdline?: string;
  className?: string;
};

const OLIVER_ASCII = `
 ██████╗  ██╗     ██╗██╗   ██╗███████╗██████╗
██╔═══██╗ ██║     ██║██║   ██║██╔════╝██╔══██╗
██║   ██║ ██║     ██║██║   ██║█████╗  ██████╔╝
██║   ██║ ██║     ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
╚██████╔╝ ███████╗██║ ╚████╔╝ ███████╗██║  ██║
 ╚═════╝  ╚══════╝╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝`;

export const Terminal = ({
  time,
  version,
  cmdline,
  className,
  theme,
}: TerminalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn(terminalVariants({ theme, className }))}>
      <div className={titleBarVariants({ theme })}>
        <div className="flex flex-row space-x-1">
          <div className="h-3 w-3 bg-red-600 rounded-full hover:bg-red-400"></div>
          <div className="h-3 w-3 bg-amber-600 rounded-full hover:bg-amber-400"></div>
          <div className="h-3 w-3 bg-green-600 rounded-full hover:bg-green-400"></div>
        </div>
      </div>
      <div className={bodyVariants({ theme })}>
        <pre className="whitespace-pre text-[9px] sm:text-xs md:text-sm text-primary">
          {`Last login: ${mounted ? time : "Loading..."} on ttys000
${OLIVER_ASCII}

██████╗   █████╗ ████████╗██████╗ ██╗ ██████╗██╗  ██╗
██╔══██╗ ██╔══██╗╚══██╔══╝██╔══██╗██║██╔════╝██║ ██╔╝
██████╔╝ ███████║   ██║   ██████╔╝██║██║     █████╔╝
██╔═══╝  ██╔══██║   ██║   ██╔═██╗ ██║██║     ██╔═██╗
██║      ██║  ██║   ██║   ██║  ██╗██║╚██████╗██║  ██╗
╚═╝      ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ v${version}

`}
        </pre>
        {cmdline && (
          <pre className="whitespace-pre text-[9px] sm:text-xs md:text-sm text-primary">
            {cmdline}
          </pre>
        )}
      </div>
    </div>
  );
};
