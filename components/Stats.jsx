"use client";

import { Item } from "@radix-ui/react-select";
import CountUp  from "react-countup";

const stats = [
    {
        num : 2,
        text : "Years Of Experience"
    },
    {
        num : 5,
        text : "Designed UI/UX"
    },
    {
        num : 7,
        text : "FrontEnd Project "
    },
    {
        num : 3,
        text : "FullStack Project"
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 md:pt-0 md:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto md:max-w-none">
                {stats.map((stat , index)=>{
                    return (
                        <div key={index} className="flex flex-1 gap-4 items-center justify-center md:justify-start">
                            <CountUp end={stat.num} duration={5} delay={2} className="text-4xl md:text-6xl"/>
                            <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>                        
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats