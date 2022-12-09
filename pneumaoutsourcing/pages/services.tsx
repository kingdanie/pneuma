import Head from "next/head"
import { ContactCard } from "../components/ContactCard"


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
            <h1>Our Services</h1>
            </section>
            <ContactCard />
        </div>
    )
}