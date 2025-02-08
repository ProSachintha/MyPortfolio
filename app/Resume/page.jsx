"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,FaPython,FaJava,FaPhp,FaAngular,FaGit,FaGithub} from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs,SiExpress,SiMysql,SiAdobephotoshop} from "react-icons/si"

const about = {
  title:"About Me",
  description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, excepturi eaque! Reprehenderit sed amet nostrum. Nobis, ratione!0",
  info:[
    {
    fieldname:"Name",
    fieldvalue:"B.V.G.S.S.Gunawardhana"

  },
    {
    fieldname:"Phone",
    fieldvalue:"(+94) 72 5808 419"

  },
    {
    fieldname:"Experience",
    fieldvalue:"2+ Years"

  },
    {
    fieldname:"Natioanality",
    fieldvalue:"Sri Lankan"

  },
    {
    fieldname:"Email",
    fieldvalue:"sachintha.s.gunawardhana@gmail.com"

  },
    {
    fieldname:"Languages",
    fieldvalue:"Sinhala , English"

  },
    {
    fieldname:"Freelance",
    fieldvalue:"Available"

  }
]
};

const experience = {
  icon: '',
  title:"My Experience",
  description:"Hello! This is My Working Expiriences",
  item:[
    {
      company: "Pure-X Software Solution (Freelance)",
      position:"Full Stack Developer",
      duration:"2022- Present"
    },
    {
      company: "Sachini Trade Center",
      position:"Sales Man",
      duration:"2021- 2022"
    },
    {
      company: "JLanka Technologies",
      position:"Admin Officer",
      duration:"2020- 2021"
    }
  ]
}
const education = {
  icon:"",
  title:"My Education",
  description:"",
  item:[
    {
      institute:"Vocational Training Authority",
      program:"ICT NVQ Level 5",
      duration:"2021 Hold"
    },
    {
      institute:"Open University of Sri Lanka",
      program:"Bachelor of Software Engineering (Honours)",
      duration:"2022 - Present"
    },
    
  ]
}
const skils = {
  title: "My Skils",
  description:"Thease Days I foucus To Web Development With MERN Stack.But I have Some Another Skils.",
  skilset:[
    {
      icon:<FaHtml5/>,
      name:"HTML"
    },
    {
      icon:<FaCss3/>,
      name:"CSS"
    },
    {
      icon:<FaJs/>,
      name:"Java Script"
    },
    {
      icon:<FaNodeJs/>,
      name:"NodeJS"
    },
    {
      icon:<FaReact/>,
      name:"ReactJS"
    },
    {
      icon:<SiNextdotjs/>,
      name:"NextJS"
    },
    {
      icon:<FaAngular/>,
      name:"AngularJs"
    },
    {
      icon:<FaPhp/>,
      name:"PHP"
    },
    {
      icon:<SiExpress/>,
      name:"ExpressJs"
    },
    {
      icon:<SiMysql/>,
      name:"MySQL"
    },
    {
      icon:<SiTailwindcss/>,
      name:"Tailwind CSS"
    },
    {
      icon:<FaJava/>,
      name:"Java"
    },
    {
      icon:<FaPython/>,
      name:"Python"
    },
    {
      icon:<FaGit/>,
      name:"Git"
    },
    {
      icon:<FaGithub/>,
      name:"GitHub"
    },
    {
      icon:<FaFigma/>,
      name:"Figma"
    },
    {
      icon:<SiAdobephotoshop/>,
      name:"Photoshop"
    },
  ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, easeIn, motion } from "framer-motion";


const Resume = () => {
  return <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4 , duration:0.4 , ease:"easeIn"},}} className="min-H-[80vh] flex item-center justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <Tabs defaultChecked="Skils" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experiece</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skils">Skils</TabsTrigger>
          <TabsTrigger value="about_me">About Me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auti xl:mx-0">{experience.description}</p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2  gap-[30px] ">
                    {experience.item.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-18  rounded-xl flex flex-col justify-center item-center lg:items-start lg:px-5 gap-1">
                        <span>{item.duration}</span>
                        <h3>{item.position}</h3>
                        <div>
                          <span></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auti xl:mx-0">{education.description}</p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2  gap-[30px] ">
                    {education.item.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-18  rounded-xl flex flex-col justify-center item-center lg:items-start lg:px-5 gap-1">
                        <span>{item.duration}</span>
                        <h3>{item.position}</h3>
                        <div>
                          <span></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skils" className="w-full">
            Skils
          </TabsContent>
          <TabsContent value="about_me" className="w-full">
            About me
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;