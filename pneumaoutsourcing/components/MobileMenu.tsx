import Link from "next/link"
import { useRouter } from "next/router";

export const MobileMenu = ({toggleMenu}: any) => {

    const route = useRouter();
    
    const appLinks = [
        {name: 'home', url: '/'},
        {name: 'about', url: '/about'},
        {name: 'services', url: '/services'},
        {name: 'contact', url: '/contact'},
    ]


    return (
        <div className="s-info">

        <div className="info-wrapper">
    {/* display: grid;
    grid-gap: 2em;
    grid-auto-rows: minmax(50px,auto);
    grid-template-columns: repeat(auto-fit,minmax(10em,1fr));
    justify-items: center; */}
            <div className="mobile-menu">
                         <nav  className="" >
                {appLinks.map(navLink => (
                    // <a key={navLink.name} href={navLink.url}>
                    //                  {navLink.name.toUpperCase()}
                    // </a>
                    <Link    
                        className={`
                        ${navLink.url == route.pathname ? 'active' : '' }`} 
                        key={navLink.name} 
                        href={navLink.url}
                        onClick={() => toggleMenu()}
                    >
                            {navLink.name.toUpperCase()}
                    </Link>
                ))}
            </nav>

            <div className="social-links">
                <a href="#" target='_blank' rel="noreferrer">LN</a>
                <a href="#" target='_blank' rel="noreferrer">FB</a>
                <a href="#" target='_blank' rel="noreferrer">TW</a>
                <a href="mailto:support@pneumaoutsourcing.com" target='_blank' rel="noreferrer">EM</a>
            </div>
            <div className="info-contact" style={{display: 'grid', margin: '10px auto', justifyItems: 'center'}}>

                <div className="info-block">
                    <h3>Start A Conversation</h3>
                    <p>
                        <a href="mailto:support@pneumaoutsourcing.com" className="info-email">
                            support@pneumaoutsourcing.com
                        </a>
                        <br />
                        <a href="tel:+2348136776626" className="'info-phone">+2348136776626</a>
                    </p>
                </div>

                <div className="info-block">
                    <h3>Visit Our Office</h3>
                    
                    <p className="info-address">
                        6A, Ogundare Awise street, Soluyi,<br />
                        Gbagada, Lagos,<br />
                        Nigeria
                    </p>
                </div>
                
            </div>  
             {/* end info contact  */} 

            </div>

  
          

        </div> 

     </div>
    )
}