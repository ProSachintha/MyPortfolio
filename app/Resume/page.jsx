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
  description:"",
  item:[
    {
      company: "Pure-X Software Solution - Freelance",
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
      name:AngularJs
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
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <div>Resume page</div>
  )
}

export default Resume