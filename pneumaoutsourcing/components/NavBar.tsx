import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { MenuIcon } from "./MenuIcon";

export default function NavBar({menuState, toggleMenu}: {menuState: boolean, toggleMenu: any}) {

      const route = useRouter();

    const appLinks = [
        {name: 'about', url: '/about'},
        {name: 'services', url: '/services'},
        {name: 'contact', url: '/contact'},
    ]
    return (
        <div className="menu">
            <Link href={'/'}>
            <Image src='/Pneuma1.png' alt='logo' width='150' height='45'/>
            </Link>
            {/* <div>NavBar</div> */}
            <nav  className="menu-links">
                {appLinks.map(navLink => (
                    <Link    className={`
                        ${navLink.url == route.pathname ? 'active' : '' }`} key={navLink.name} href={navLink.url}>
                            {navLink.name.toUpperCase()}
                    </Link>
                ))}
            </nav>
            <MenuIcon menuState={menuState} toggleMenu={toggleMenu} /> 
        </div>
    )
}