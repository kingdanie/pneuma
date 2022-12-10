import { useState } from "react";
import Footer from "./Footer";
import { MenuIcon } from "./MenuIcon";
import { MobileMenu } from "./MobileMenu";
import NavBar from "./NavBar";

export  const Layout = ({ children }: { children: React.ReactNode }) => {

    const [menuState, setMenuState] = useState(false);

    const toggleMenu = () => {
      setMenuState(!menuState)
    }
    return (
        <div className={`${menuState ? 'info-is-visible' : ''}`}>
        {/* <MenuIcon menuState={menuState} toggleMenu={toggleMenu} />  */}
                <NavBar menuState={menuState} toggleMenu={toggleMenu} />

        <main style={{minHeight: '70vh'}}>
          {/* Primary column */}
          {children}
        </main>
        <Footer />
        <MobileMenu />
        </div>
    )
}