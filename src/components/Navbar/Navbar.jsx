import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import {BsFilm} from "react-icons/bs"
import css from "./Navbar.module.css"
export default function Navbar() {
  return (
    <nav>
        <div>
            <div>
                <Link className={css.logoLink} to="/"><BsFilm size={22}/></Link>
                <NavbarMenu/> 
            </div>
        </div>
    </nav>
  )
}


