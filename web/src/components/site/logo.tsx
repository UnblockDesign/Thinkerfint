import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light"
  className?: string
}) {
  return (
    <Link
      href="/"
      aria-label="LogicTrust home"
      className={cn("relative block h-10 w-[151px] shrink-0", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/logictrust-mark.svg"
        alt=""
        className="absolute top-[21.81%] left-[4.07%] h-[56.38%] w-[21.91%]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={
          variant === "light"
            ? "/logos/logictrust-word-light.svg"
            : "/logos/logictrust-word.svg"
        }
        alt="LogicTrust"
        className="absolute top-[30.45%] left-[31.02%] h-[48.1%] w-[62.55%]"
      />
    </Link>
  )
}
