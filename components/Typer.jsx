"use client";
import  {useTypewriter,Cursor}  from 'react-simple-typewriter'


const Typer = () => {
    const[texts]= useTypewriter({
        words:['Web Developer','Software Developer','UI/UX Designer'],
        loop:{},
      });
  return (
    <div className='text-xl'>
        {texts}<Cursor/>
    </div>
  )
}

export default Typer