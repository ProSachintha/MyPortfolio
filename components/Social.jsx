import Link from "next/link"
import {FaGithub , FaLinkedin , FaYoutube} from 'react-icons/fa'

const socials =[
    {icon:<FaGithub/> , path:'https://github.com/ProSachintha'},
    {icon:<FaLinkedin/> , path:'https://www.linkedin.com/in/sachinthagunawardhana/'},
    {icon:<FaYoutube/> , path:'https://www.youtube.com/@sankoola5711'},
]

const Social = ({containerStyle , iconStyle}) => {
  return (
    <div className={containerStyle}>
        {socials.map((social , index)=>{
            return <Link key={index} href={social.path} className={iconStyle}>{social.icon}</Link>
        })}
    </div>
  )
}

export default Social