import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Pneuma Outsourcing is commited to acquiring 
            and managing the most human 
            resource for businesses to thrive
          "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="Width-1040"
        style={{
          padding: 50,
        }}
      >
        <h1>Reach Out To Us</h1>
        <p>
          Contact us today to learn more about our services
          and how we can help your business achieve its
          goals. Our team of experienced professionals is
          ready to assist you with all of your business
          needs. Whether you're looking for advice on
          strategic planning, help with market analysis, or
          support with organizational development, we're
          here to help. We offer a range of <Link href={'/services'}>services</Link> and
          will work with you to develop a customized plan
          that meets your unique needs. Contact us now to
          schedule a consultation and take the first step
          towards improving your business.
        </p>
      </section>
      <section className="Width-1040 p-flex"
        style={{
          alignItems: "center",
          flex: "1 1 0px",
          gap: 10,
        }}
      >
        <div style={{ width: "100%" }}>
      
          <div>Adress</div>
          <div>Phone</div>
          <div>Social Media</div>
        </div>
        <div style={{ width: "100%" }}>
          <form
            style={{ background: "#efefef", padding: 25 }}
          >
            <div>
              <input type="text" placeholder="your name" />
            </div>
            <div>
              <input type="text" placeholder="your email" />
            </div>
            <div>
              <textarea
                name="mesage"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
