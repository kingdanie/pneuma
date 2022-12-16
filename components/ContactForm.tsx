import { useState } from "react";
import axios from 'axios';


export default function ContactForm() {
    const [mailSent, setmailSent] = useState(false);
    const [error, setError] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [message, setMessage] = useState('')

    const API_PATH = 'https://dev.pneumaoutsourcing.com/api/index.php';
  
    const [] = useState()
    const HandleSubmit = (e: any) => {
      e.preventDefault();
      const msg = {
        name: name,
        email: email,
        mobile: mobile,
        message: message,
      }
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: msg
      })
        .then(result => {
          clearForm();
          if (result.status === 200) {
            setmailSent(true)
          } else {
            setError(true)
          }
        })
        .catch(error => setError( error.message ));
    };

    // const HandleSubmit = () => {
    //     console.log(`submitted ${name} ${email} ${mobile} ${message}`)
    // }
    const clearForm = () => {
      setName(''),
      setEmail(''),
      setMobile(''),
      setMessage('')
    }
  return (
    <div>
      <form className="contact-form" onSubmit={HandleSubmit}>
        <div className="form-grid">
        <div className="first-form-col" style={{display: 'flex'}}>
          <div>
            <input 
                type="text" 
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value.trim())} 
                required
            />
          </div>
          <div>
            <input 
                type="email" 
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())} 
                required
            />
          </div>
          <div>
            <input
              type="mobile"
              placeholder="Your Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.trim())} 
            />
          </div>
        </div>
        <div>
          <textarea 
            className="form-textarea"
            name="mesage"
            placeholder="What would you like to inquire?"
            value={message}
            onChange={(e) => setMessage(e.target.value.trim())} 
            required
            >
            </textarea>
        </div>
        </div>
        <div className="form-button">
          <button>Submit Message</button>
        </div>
        <div>
              {mailSent && <div className="success">Thank you for contacting us, We will get back to you shortly.</div>}
              {error && <div className="error">Please fill the complete form</div>}
            </div>
      </form>
    </div>
  );
}
