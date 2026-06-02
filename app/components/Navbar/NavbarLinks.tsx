type NavbarLinksProps = {
  className?: string
}

const NavbarLinks = ({ className }: NavbarLinksProps) => {
    return(
        <ul className={`py-4 px-6 text-white gap-4 ${className}`}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre Mi</a></li>
          <li><a href="#">Habilidades</a></li>
          <li><a href="#">Experiencia</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
    )
}

export default  NavbarLinks