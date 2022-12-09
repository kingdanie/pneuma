import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const pad = {
    padding: "50px",
  };

  const flex = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      <Head>
        <title>Pneuma Outsourcing Ltd</title>
        <meta
          name="description"
          content="Your trusted source on talent management and hr outsourcing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero section */}
      <section
        className="p-flex  Width-1040"
        style={{
          // background: "#efefef",
          position: 'relative',
          padding: 50,
        }}
      >
        <div className="hero-info">
          <p className="subtitle">Pneuma Outsourcing ltd</p>
          <h1>
            Reliable Human Resource and Talent Management
          </h1>
          <p>
            We empower our clients to make the right
            decisions about their people so their businesses
            can thrive.{" "}
          </p>
          <button
            style={{
              background: "#008aec",
              borderColor: "#008aec",
            }}
          >
            Schedule an appointment
          </button>
        </div>
        <div className="hero-image">
          <img
            style={{
              borderRadius: "50%",
              width: "400px",
              height: "400px",
            }}
            src="/suit.jpeg"
            alt="why us"
            width="auto"
            height="auto"
          />
        </div>
      </section>
      
      <section className="about-section Width-1040">
        <p className="subtitle">Introduction</p>
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


      {/* Services section */}
      <section className="about-section Width-1040">
      <p className="subtitle">Services</p>
        <h2>
        We have strategically positioned our services to tackle the most challenging 
        touch points currently facing businesses. Here are a few:
        </h2>
        <div className="p-flex services-card">
          <div>
              <h3>
                Talent Management
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, velit laborum odio ullam illo doloribus esse, 
                nobis eum vero inventore earum recusandae dolorum, incidunt unde excepturi eligendi ab ducimus praesentium.
              </p>
          </div>
          <div>
          <div className="hero-image">
          <img
            style={{
              borderRadius: "50%",
              width: "300px",
              height: "300px",
            }}
            src="/suit.jpeg"
            alt="why us"
            width="auto"
            height="auto"
          />
        </div>
          </div>
        </div>
        <div className="p-flex services-card">
       
          <div>
          <div className="hero-image">
          <img
            style={{
              borderRadius: "50%",
              width: "300px",
              height: "300px",
            }}
            src="/business-consultancy.jpg"
            alt="why us"
            width="auto"
            height="auto"
          />
        </div>
          </div>
          <div>
              <h3>
                Business Consultancy
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, velit laborum odio ullam illo doloribus esse, 
                nobis eum vero inventore earum recusandae dolorum, incidunt unde excepturi eligendi ab ducimus praesentium.
              </p>
          </div>
        </div>
        <div className="p-flex services-card">
          <div>
              <h3>
                HR Outsourcing
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, velit laborum odio ullam illo doloribus esse, 
                nobis eum vero inventore earum recusandae dolorum, incidunt unde excepturi eligendi ab ducimus praesentium.
              </p>
          </div>
          <div>
          <div className="hero-image">
          <img
            style={{
              borderRadius: "50%",
              width: "300px",
              height: "300px",
            }}
            src="/hr-smile.jpeg"
            alt="why us"
            width="auto"
            height="auto"
          />
        </div>
          </div>
        </div>
        <div className="p-flex services-card">
       
       <div>
       <div className="hero-image">
       <img
         style={{
           borderRadius: "50%",
           width: "300px",
           height: "300px",
         }}
         src="/outsourcing.jpeg"
         alt="why us"
         width="auto"
         height="auto"
       />
     </div>
       </div>
       <div>
           <h3>
             Business Consultancy
           </h3>
           <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, velit laborum odio ullam illo doloribus esse, 
             nobis eum vero inventore earum recusandae dolorum, incidunt unde excepturi eligendi ab ducimus praesentium.
           </p>
       </div>
     </div>
      </section>

        {/* Contact Section  */}
      <section className="contact-section p-flex Width-1040">
          <div>
            <h2>Reliable Outsourcing for your business needs</h2>
            <p>Reach to out to us for inquiries, appointments or consultancy</p>
            <button>Contact Us</button>
          </div>
          <div className="image-container" style={{borderRadius: '50%',}}>
            <img src="/hr.jpg" width="350px" height="350px" />
          </div>

      </section>
      {/* About section */}
      <section
        className="p-flex"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 50,
        }}
      >
        <div>
          <h2>Why Pneuma</h2>
          <hr />
          <p>
            Pneuma is a leader in employment law for
            employers, HR outsourcing support, and health
            and safety consulting. Quintessentially
            different, we uniquely offer designated
            specialists and bespoke service to every
            business.
          </p>
          <p>
            Your specialist will be an expert in your
            sector. Always at your side, they will
            seamlessly help you navigate all of your HR and
            H&S challenges. Available 24/7, you can contact
            us whenever you need to and we’ll immediately
            help relieve any problems you are facing.
          </p>
          <p>
            Through our 360 solution, you will have complete
            peace of mind that your business is fully
            protected and always compliant with UK law. You
            can also enhance and future-proof your HR and
            H&S through our innovate software solutions
          </p>
        </div>
        <div style={{ border: "solid 3px blue" }}>
          <Image
            src={"/pneuma1.png"}
            alt="why us"
            width={"350"}
            height={250}
          />
        </div>
      </section>

     
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          // background: "#efefef",
          padding: 50,
        }}
      >
        <div style={{ border: "solid 3px blue" }}>{""}</div>
        <div>
          <h2>
            Why Are Our Services So Important To Nigerian
            Business?
          </h2>
          <hr />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <h3>Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Animi aut porro quas eum
                  quod omnis molestiae ipsum repellendus
                  illum qui.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section style={pad}>
        <form style={flex}>
          <input type="text" placeholder="Your name" />
          <textarea placeholder="Your message"></textarea>
          <button>Submit</button>
        </form>
      </section>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/about">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>
            pages/index.tsx
          </code>
        </p>

        <div className={styles.grid}>
          <a href="/contact" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>
              Find in-depth information about Next.js
              features and API.
            </p>
          </a>

          <a href="/services" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>
              Learn about Next.js in an interactive course
              with quizzes!
            </p>
          </a>

          <a href="/404" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>
              Discover and deploy boilerplate example
              Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public
              URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
