import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ContactCard } from "../components/ContactCard";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("../components/CalendlyBtn"), {
  ssr: false
});

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
          position: "relative",
          padding: 50,
        }}
      >
        <div className="hero-info" id="scheduleBtn">
          <p className="subtitle">Pneuma Outsourcing ltd</p>
          <h1>
            Reliable Human Resource and Talent Management
          </h1>
          <p>
            We empower our clients to make the right
            decisions about their people so their businesses
            can thrive.{" "}
          </p>
          {/* <button
            style={{
              background: "#008aec",
              borderColor: "#008aec",
            }}
          >
            Schedule an appointment
          </button> */}
          <Calendly text="Schedule an appointment!"/>
        </div>
        <div className="hero-image">
          <img
            style={{
              borderRadius: "50%",
              width: "400px",
              minHeight: '250px',
              height: "400px",
              objectFit: 'cover',
    objectPosition: '10%'
            }}
            src="/outsourcing.jpeg"
            alt="why pneumaoutsourcing"
            width="auto"
            height="auto"
          />
        </div>
      </section>

      {/* About section */}
      <section className="about-section Width-1040">
        <p className="subtitle">Introduction</p>
        <h2>
          Welcome to Pneuma Outsourcing Ltd, the leader in Talent Management, Human Resource Outsourcing, 
          and Business Consultancy.
        </h2>

        <div className="About-Cards">
          <div className="p-card">
            <div className="card-icons">
              <img src="/compliance.svg" width="30px" alt="business compliancy icon" />
            </div>
            Business compliancy
          </div>

          <div className="p-card">
            <div className="card-icons">
              <img src="/productivity.svg" width="35px" alt="increased  icon" />
            </div>
            Increased productivity
          </div>

          <div className="p-card">
            <div className="card-icons">
              <img src="/time-is-money.svg" width="35px" alt="save cost and time icon" />
            </div>
            Save Cost<br /> & Time
          </div>

          <div className="p-card">
            <div className="card-icons">
              <img src="/financial.svg" width="35px" alt="financial security icon" />
            </div>
            Financial security
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="service-section Width-1040">
        <p className="subtitle">Services</p>
        <h2>
          We&apos;ve strategically talored our services to
          tackle the most challenging touch points businesses face.
          Here&apos;s a few of them:
        </h2>
        <div className="p-flex services-card">
          <div className="w-45">
            <h3>Talent Management</h3>
            <p>
            Talent management is the process of identifying, developing, 
            and retaining top employees to drive business forward. 
            Our talent management solutions include acquisition, training, 
            performance management, and succession planning.  <br />
            <Link href={'/contact'}> Find out learn more</Link>.
            </p>
          </div>
          <div>
            <div className="service-image">
              <img
                style={{
                  borderRadius: "50%",
                  width: "300px",
                  height: "300px",
                }}
                src="/talent.jpg"
                alt="why us"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
        <div className="p-flex col-reverse services-card">
          <div>
            <div className="service-image">
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
          <div className="w-45">
            <h3>Business Consultancy</h3>
            <p>
            With business consultancy, we provide expert advice and assistance to businesses 
            in order to help them improve operations and achieve goals. 
            Our experienced team offers a range of services and develops 
            customized plans to meet your unique needs.  <br />
            <Link href={'/contact'}> Learn more.</Link>
            </p>
          </div>
        </div>
        <div className="p-flex services-card">
          <div className="w-45">
            <h3>HR Outsourcing</h3>
            <p>
            HR outsourcing is a cost-effective way for businesses to 
            manage their human resources needs. 
            Our HR outsourcing services include payroll, 
            benefits administration, employee relations, and compliance. <br />
            <Link href={'/services'}> Learn more.</Link>
            </p>
          </div>
          <div>
            <div className="service-image">
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
        <div className="p-flex col-reverse services-card">
          <div>
            <div className="service-image">
              <img
                style={{
                  borderRadius: "50%",
                  width: "300px",
                  height: "300px",
                }}
                src="/outsourcing.jpg"
                alt="why us"
                width="auto"
                height="auto"
              />
            </div>
          </div>
          <div className="w-45">
            <h3>Coaching & Training</h3>
            <p>
            Coaching and training your staff is an important part of ensuring 
            their success and the success of your business. 
            Our services include leadership development, team building, 
            and performance coaching.  <br />
            <Link href={'/contact'}> Contact us to learn more or </Link>
            <Link href={'#scheduleBtn'}> schedule a consultation.</Link>
            </p>
          </div>
        </div>
        <div className="services-card" style={{display: 'flex', flexDirection:'column',
    alignItems: 'center', marginTop: '10em'}}>
          <h3>More Services</h3>
          <p>For comprehensive details on our service offerings, kindly click on button below</p>
            <Link href={'/services'}>
          <button>
            See All Our Services
          </button>
          </Link>
        </div>
      </section>


      {/* Contact Section  */}
      <ContactCard />
  

      {/* <main className={styles.main}>
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
      </main> */}

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  );
}
