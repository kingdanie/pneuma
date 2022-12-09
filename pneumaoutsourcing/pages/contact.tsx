import Head from "next/head";

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
        className="p-flex  Width-1040"
        style={{
          padding: 50,
        }}
      >
        <h1>Contact Us</h1>
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          flex: "1 1 0px",
          padding: "50px 150px",
          gap: 10,
        }}
      >
        <div style={{ width: "100%" }}>
          <h1>Contact Us</h1>
          <p>
            We look forward to discussing a new project with
            you. For inquiries or quotes, contact us via:
          </p>
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
