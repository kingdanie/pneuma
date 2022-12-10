import { useState } from "react"

export const MenuIcon = ({menuState, toggleMenu}: {menuState: boolean, toggleMenu: any}) => {

    // const [menuOpen, setMenuOpen] = useState(false)

const toggleIcon = () => {
    // setMenuOpen(!menuOpen)
    // console.log(menuOpen)
    toggleMenu()

}
    return (
        <>
    <a  onClick={() => toggleIcon()} className={`${menuState ? 'info-is-visible' : ''} info-toggle`} href="#0">
        <span className="info-menu-icon"></span>
    </a>
        </>
    )
}