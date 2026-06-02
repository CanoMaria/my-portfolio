import HamburgerButton from "./HamburgerButton"
import NavbarLinks from "./NavbarLinks"

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 bg-purple-400 w-full ">
        <HamburgerButton />
        <NavbarLinks className="hidden md:flex md:flex-row justify-end" />
    </nav>
  )
}

export default Navbar