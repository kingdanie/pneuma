import Image from "next/image"
import Link from "next/link"

export default function NavBar() {

    const appLinks = [
        {name: 'about', url: '/about'},
        {name: 'services', url: '/services'},
        {name: 'contact', url: '/contact'},
    ]
    return (
        <div className="" 
            style={{display: "flex", justifyContent: "space-between", padding: 25}}>
            <Link href={'/'}>
            <Image src='/Pneuma1.png' alt='logo' width='150' height='45'/>
            </Link>
            {/* <div>NavBar</div> */}
            <nav style={{display: "flex", gap: 25,}}>
                {appLinks.map(navLink => (
                    <Link key={navLink.name} href={navLink.url}>
                            {navLink.name.toUpperCase()}
                    </Link>
                ))}
            </nav>
        </div>
    )
}