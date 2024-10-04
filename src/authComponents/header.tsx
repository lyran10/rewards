import React from "react"

type Props = {
    login? : boolean | null,
    bool? : boolean | null,
    header : string
}

export const Header = ({ login, bool, header } : Props) => {
  return (
    <header className={`text-[20px] md:text-[25px] lg:text-[25px] font-semibold self-start ${login === bool ? "opacity-[1] z-[1000] transition-all delay-300 translate-y-0 duration-300" : "opacity-0 z-[-1] translate-y-10"}`}>{header}</header>
  )
}
