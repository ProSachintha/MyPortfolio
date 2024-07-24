import { animate, motion } from "framer-motion"


const stairsAnimation = {
    initial:{
        top : "100%",
    },
    animate : {
        top : "100%",
    },
    exit : {
        top : ["0%" , "100%"]
    },
}

const reverseIndex =(index)=>{
    const totalStep = 8;
    return totalStep - index - 1;
}

const Stairs = () => {
  return (
    <>
        {[...Array(8)].map((_, index)=> {
            return(
                
                <motion.div key={index} variants={stairsAnimation} initial="initial" animate="animate" exit="exit" transition={{
                    duration : 0.3,
                    ease : "easeInOut",
                    delay : reverseIndex(index) * 0.1 ,
                }} 
                className="w-full h-full bg-gray-700 relative "/>
            )
        })}
    </>
  )
}

export default Stairs