import Head from "next/head";
import { ContactCard } from "../components/ContactCard";
import Link from "next/link";


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
          <h1>
            We&apos;re transforming the future of
            recruitment acquisition and management.
          </h1>
          <p>
            Lets help you get the super team needed to take
            your business to the next level.
          </p>
          <button>GET STARTED</button>
        </div>

        <div className="about-image">
          <img
            style={{
              borderRadius: "50%",
              width: "400px",
              height: "400px",
            }}
            src="/talent.jpg"
            alt="why us"
            width="auto"
            height="auto"
          />
        </div>
      </section>

      <section className="Width-1040">
        <small className="subtitle">About Us</small>
        <h2>Who We are</h2>

        <p>
          Pneuma Outsourcing Ltd is a Human Resource
          management company that is dedicated to helping
          businesses of all sizes manage their HR needs. We
          offer a wide range of services, including payroll,
          benefits administration, employee relations, and
          compliance. Our experienced team will work with
          you to understand your unique business needs and
          develop a customized HR outsourcing plan that will
          help you achieve your goals. By partnering with
          our HR outsourcing company, you can save time and
          money, while also gaining access to experienced HR
          professionals who can help you manage your HR
          needs more effectively. We&apos;re committed to
          providing our clients with the highest level of
          service and support, and we&apos;ll work closely
          with you to ensure that your HR needs are met.
          Whether you&apos;re looking to streamline your HR
          processes, improve employee satisfaction, or
          reduce HR costs, our HR outsourcing services can
          help. Contact us today to learn more or <Link href={'/#scheduleBtn'}>Click here
          to schedule a consultation.</Link> We&apos;re ready to
          help your business succeed.
        </p>
      </section>
      <section className="Width-1040">
        <div className="p-flex">
          <div>
            <h3 className="colored-text ">Our Vision</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate cumque quae
              laudantium, corrupti laborum ullam in incidunt
              et. Vero, qui sit. Illo, architecto amet
              laborum earum unde consequatur dolore iusto?
            </p>
          </div>
          <div>
            <h3 className="colored-text ">Our Mision</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate cumque quae
              laudantium, corrupti laborum ullam in incidunt
              et. Vero, qui sit. Illo, architecto amet
              laborum earum unde consequatur dolore iusto?
            </p>
          </div>
        </div>
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
        <h2
          className="colored-text"
          style={{ marginBottom: "1em" }}
        >
          Take Action Now!
        </h2>
        <h3>
          Whether you&apos;re looking to streamline your HR
          processes, improve employee satisfaction, or
          reduce HR costs, our HR outsourcing services can
          help. Contact us today to learn more or <Link href={'/#scheduleBtn'}>Click here
          to schedule a consultation.</Link> We&apos;re ready to help your
          business succeed.
        </h3>
      </section>

      <ContactCard />
    </div>
  );
}
