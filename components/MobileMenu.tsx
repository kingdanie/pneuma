import Link from "next/link"
import { useRouter } from "next/router";

export const MobileMenu = () => {

    const route = useRouter();
    
    const appLinks = [
        {name: 'about', url: '/about'},
        {name: 'services', url: '/services'},
        {name: 'contact', url: '/contact'},
    ]


    return (
        <div className="s-info">

        <div className="row info-wrapper">

     

            <nav  className="" style={{display: 'flex', flexDirection: 'column'}}>
                {appLinks.map(navLink => (
                    // <a key={navLink.name} href={navLink.url}>
                    //                  {navLink.name.toUpperCase()}
                    // </a>
                    <Link    className={`
                        ${navLink.url == route.pathname ? 'active' : '' }`} key={navLink.name} href={navLink.url}>
                            {navLink.name.toUpperCase()}
                    </Link>
                ))}
            </nav>
            <div className="col-seven tab-full info-main">

                    
                <h1>We are Penuma Outsourcing. The Home of sterling Human Resource.</h1>
                <p>
                Our website might currenlty be under consultion but we are actively 
                offering our services to our clients. 
                Kindly reach out to us via email or phone, our agents are on 
                standby to attend to you. 
                We would love to hear from you. 
                </p>


            </div>

            <div className="col-four tab-full pull-right info-contact">

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

                <div className="info-block">
                    <h3>Find Us On</h3>
                    
                    <ul className="info-social">
                        <li>
                            <a href="#0"><i className="fab fa-facebook" aria-hidden="true"></i>
                            <span>Facebook</span></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i>
                            <span>Twiiter</span></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-instagram" aria-hidden="true"></i>
                            <span>Instagram</span></a>
                        </li>
                        <li>
                            <a href="mailto:support@pneumaoutsourcing.com"><i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>Email</span></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-linkedin" aria-hidden="true"></i>
                            <span>LinkedIn</span></a>
                        </li>
                    </ul>
                </div>
                
            </div>  
             {/* end info contact  */}
          

        </div> 

     </div>
    )
}