import { ContactCard } from "../components/ContactCard";

export default function Page404() {
        return (
            <div>
                <section className="Width-1040" style={{textAlign: 'center'}}>
                                    <h1 className="colored-text">Page or Resource not found</h1>
                <p>Please reach out to us for your inquiries or questions</p>
                </section>

                <ContactCard />
            </div>
        )
}