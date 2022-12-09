import Head from "next/head";
import { ContactCard } from "../components/ContactCard";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Pneuma Outsourcing is commited to acquiring and managing the most human resource for businesses to thrive"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="p-flex  Width-1040">
        <div>
        <h1>We're transforming the future of recruitment acquisition and management.</h1>
        <p>Lets help you get the super team needed to take your business to the next level.</p>
        <button>GET STARTED</button>
        </div>

        <div>

        </div>
      </section>

      <section className="Width-1040">
        <h2 style={{textAlign: 'center'}}>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo at eaque facilis dignissimos quia veniam. Reiciendis, dolores. 
            Eveniet ducimus quo esse. Dicta amet cumque necessitatibus at ipsam voluptatem voluptatibus eos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo at eaque facilis dignissimos quia veniam. Reiciendis, dolores. 
            Eveniet ducimus quo esse. Dicta amet cumque necessitatibus at ipsam voluptatem voluptatibus eos?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo at eaque facilis dignissimos quia veniam. Reiciendis, dolores. 
            Eveniet ducimus quo esse. Dicta amet cumque necessitatibus at ipsam voluptatem voluptatibus eos?
        </p>
      </section>

      <section className="about-section Width-1040">
        <p className="subtitle">Mission</p>
        <h2>
          Pneuma is a leader in employment law for
          employers, HR outsourcing support, and health and
          safety consulting.
        </h2>

        <div className="About-Cards">
          <div className="p-card">
            <div className="card-icons">
              <img src="/compliance.svg" width="30px" />
            </div>
            Business compliancy
          </div>

          <div className="p-card">
            <div className="card-icons">
              <img src="/productivity.svg" width="35px" />
            </div>
            Increased productivity
          </div>

          <div className="p-card">
            <div className="card-icons">
              <img src="/time-is-money.svg" width="35px" />
            </div>
            Increased productivity
          </div>

          <div className="p-card">
            <div className="card-icons">
              <img src="/financial.svg" width="35px" />
            </div>
            Financial security
          </div>
        </div>
      </section>

      <section className="about-section Width-1040">
        <p className="subtitle">Vision</p>
        <h2>
          Pneuma is a leader in employment law for
          employers, HR outsourcing support, and health and
          safety consulting.
        </h2>

        <div className="About-Cards">
          <div className="p-card">
            <div className="card-icons">
              <img src="/compliance.svg" width="30px" />
            </div>
            Business compliancy
          </div>

          <div className="p-card">
            <div className="card-icons">
              <img src="/productivity.svg" width="35px" />
            </div>
            Increased productivity
          </div>

          <div className="p-card">
            <div className="card-icons">
              <img src="/time-is-money.svg" width="35px" />
            </div>
            Increased productivity
          </div>

          <div className="p-card">
            <div className="card-icons">
              <img src="/financial.svg" width="35px" />
            </div>
            Financial security
          </div>
        </div>
      </section>

      <ContactCard />
    </div>
  );
}
