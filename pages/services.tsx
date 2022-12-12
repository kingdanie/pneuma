import Head from "next/head";
import { ContactCard } from "../components/ContactCard";

export default function Services() {
  return (
    <div>
      <Head>
        <title>Our Services</title>
        <meta
          name="description"
          content="Pneuma Outsourcing is commited to acquiring and managing the most human resource for businesses to thrive"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="p-flex  Width-1040">
        <div>
                  <h1 className="subtitle">Our Services</h1>
        <h2>We have strategically positioned our services to tackle the 
          most challenging touch points currently facing businesses
        </h2>
        </div>

        <div className="service-image">
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
        <section>
          <h3 className="colored-text">Business Consultancy</h3>
          <p>
          business consultancy is a company that provides
          expert advice and assistance to businesses in
          order to help them improve their operations and
          achieve their goals. They can provide a wide range
          of services, including strategic planning, market
          analysis, and organizational development. Many
          businesses turn to consultancies when they need
          help identifying and addressing specific
          challenges or opportunities, or when they want to
          tap into the expertise of experienced
          professionals. Our business consultancy services
          are designed to help businesses of all sizes
          achieve their goals. We offer a range of services,
          including market research, competitive analysis,
          and business planning. Our experienced team will
          work with you to understand your unique business
          needs and develop a customized consultancy plan
          that will help you achieve your goals. Whether
          you&apos;re looking to grow your business, increase
          profitability, or improve your operations, our
          business consultancy services can help. Contact us
          today to learn more and schedule a consultation
          </p>
            
        </section>

        <section>
          <h3 className="colored-text">Talent management</h3>
          <p>
            HR outsourcing is a cost-effective way for
          businesses to manage their human resources needs.
          By partnering with an HR outsourcing company,
          businesses can access a wide range of HR services
          without the need to hire in-house staff. This can
          save time and money, while also providing access
          to experienced HR professionals who can help
          businesses manage their HR needs more effectively.
          Our HR outsourcing services are designed to help
          businesses of all sizes manage their HR needs. We
          offer a range of services, including payroll,
          benefits administration, employee relations, and
          compliance. Our experienced team will work with
          you to understand your unique business needs and
          develop a customized HR outsourcing plan that will
          help you achieve your goals. Whether you&apos;re
          looking to streamline your HR processes, improve
          employee satisfaction, or reduce HR costs, our HR
          outsourcing services can help. Contact us today to
          learn more and schedule a consultation.
          </p>
        </section>

        <section>
          <h3 className="colored-text">Hr outsourcing </h3>
          <p>
            HR outsourcing is a cost-effective way for
          businesses to manage their human resources needs.
          By partnering with an HR outsourcing company,
          businesses can access a wide range of HR services
          without the need to hire in-house staff. This can
          save time and money, while also providing access
          to experienced HR professionals who can help
          businesses manage their HR needs more effectively.
          Our HR outsourcing services are designed to help
          businesses of all sizes manage their HR needs. We
          offer a range of services, including payroll,
          benefits administration, employee relations, and
          compliance. Our experienced team will work with
          you to understand your unique business needs and
          develop a customized HR outsourcing plan that will
          help you achieve your goals. Whether you&apos;re
          looking to streamline your HR processes, improve
          employee satisfaction, or reduce HR costs, our HR
          outsourcing services can help. Contact us today to
          learn more and schedule a consultation.
          </p>
        </section>

        <section>
          <h3 className="colored-text">Coaching and training</h3>
          <p>
          Coaching and training your staff is an important
          part of ensuring their success and the success of
          your business. By providing your employees with
          the skills and knowledge they need to succeed, you
          can improve their performance, increase
          productivity, and drive your business forward. Our
          coaching and training services are designed to
          help businesses of all sizes develop their staff.
          We offer a range of services, including leadership
          development, team building, and performance
          coaching. Our experienced team will work with you
          to understand your unique business needs and
          develop a customized coaching and training plan
          that will help you achieve your goals. Whether
          you&apos;re looking to improve the skills of your
          existing staff, train new employees, or develop
          your leadership team, our coaching and training
          services can help. Contact us today to learn more
          and schedule a consultation.
          </p>
        </section>
      </section>
      <ContactCard />
    </div>
  );
}
