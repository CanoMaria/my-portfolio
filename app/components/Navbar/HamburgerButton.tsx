"use client"
import { useState, useEffect } from "react"
import NavbarLinks from "./NavbarLinks"



const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return(
    <>
    <button onClick={() => {console.log("clik");setIsOpen(!isOpen); }}className="block md:hidden text-xl font-bold p-4 mr-3 ml-3 justify-self-end">MENU</button>
    {isOpen && <NavbarLinks className="block flex flex-col" />}
    </>
  )
}


export default HamburgerButton