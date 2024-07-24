import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
        <div className="container mx-auto flex justify-between items-center">
            <Link href={'/'}>
                <h1 className="text-4xl font-semibold">SSG<span className="text-accent-default">.</span></h1>
            </Link>

            {/* Desktop Look Nav Bar */}
            <div className="hidden md:flex items-center gap-8" >
                <Nav/>
                <Link href={'/Contact'}>
                    <Button>Hire Me</Button>
                </Link>

            </div>
            {/* Mobile Look Nav Bar */}
            <div className="md:hidden">
                <MobileNav/>
            </div>
        </div>
    </header>
  )
}

export default Header