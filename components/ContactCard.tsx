import Link from "next/link"

export const ContactCard = () => {
    return(
        <section className="contact-section p-flex Width-1040">
        <div className="w-45">
          <p className="subtitle">Contact</p>
          <h2>
            Reliable Outsourcing for your business needs
          </h2>
          <p>
            Reach to out to us for inquiries, appointments
            or consultancy
          </p>
            <Link href={'/contact'}>
          <button>
            Contact Us
           </button>
            </Link>
        </div>
        <div
          className="image-container"
          style={{ borderRadius: "50%" }}
        >
          <img src="/hr.jpg" width="350px" height="350px" />
        </div>
      </section>
    )
}