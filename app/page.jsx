
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Typer from "@/components/Typer";
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';



const Home = () => {
  
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-0 md:pb-5 ">
          <div className="text-center md:text-left order-2 md:order-none ">
            <Typer/>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent-default">Gunawardhana</span>
            </h1>
            <p className="max-w-[600px] mb-6 text-white/80">I am a person who likes to introduce new
                solutions and face challenges by thinking out
                of the box, able to work harmoniously and
                efficiently with teams, learning quickly,
                adapting to changing environments with
                new knowledge
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8 ">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 md:mb-0">
                <Social containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mb-8 md:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home
