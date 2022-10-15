import items from "./items"
import { NavLink } from "react-router-dom"
import css from './NavbarMenu.module.css'
const getClassName = ({isActive}) => {
    return isActive ? `${css.link} ${css.linkActive}` : `${css.link}`;
}
export default function NavbarMenu() {
    const elements = items.map(({id,to,text})=> {
        return (
            <li className={css.elemItem} key={id}>
                <NavLink className={getClassName} to={to} end>{text}</NavLink>
            </li>
        )
    })
  return (
    <ul className={css.elemList}>{elements}</ul>
  )
}
