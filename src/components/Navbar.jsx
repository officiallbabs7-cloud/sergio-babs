import { useState } from "react"
import logo from "../assets/babs-logo.jpeg"
import { RiCloseLine, RiMenu3Line } from "@remixicon/react"
import { LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={15} alt=" Sergio-babs"></img>
          </a>
        </div>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-white pr-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
                {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
         <a key={index} href={link.link} className="uppercase text-sm font-medium text-white hover:text-neutral-400 transition-colors">
          {link.name}
        </a>
      ))}
        </div>
      </div>

      <div className={`${
        isOpen ? "block" : "hidden"} md:hidden absolute bg-black w-full py-5 px-4 mt-2 border-b-4`}>
          {LINKS.map((link, index) => (
            <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide text-white">
              {link.name}
            </a>
          ))}

      </div>
    </nav>
  )
}

export default Navbar