import { useState } from "react";

export default function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [message, setMessage] = useState('')

    const HandleSubmit = () => {
        console.log(`submitted ${name} ${email} ${mobile} ${message}`)
    }
  return (
    <div>
      <form className="contact-form" onSubmit={HandleSubmit}>
        <div className="form-grid">
        <div className="first-form-col" style={{display: 'flex'}}>
          <div>
            <input 
                type="text" 
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                required
            />
          </div>
          <div>
            <input 
                type="text" 
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
          </div>
          <div>
            <input
              type="mobile"
              placeholder="your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)} 
            />
          </div>
        </div>
        <div>
          <textarea 
            className="form-textarea"
            name="mesage"
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            required
            >
            </textarea>
        </div>
        </div>
        <div className="form-button">
          <button>Submit Message</button>
        </div>
      </form>
    </div>
  );
}
