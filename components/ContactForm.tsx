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
          if (result.data.sent) {
            setmailSent(result.data.sent)
            setError(false)
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
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value.trim())} 
                required
            />
          </div>
          <div>
            <input 
                type="email" 
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())} 
                required
            />
          </div>
          <div>
            <input
              type="mobile"
              placeholder="your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.trim())} 
            />
          </div>
        </div>
        <div>
          <textarea 
            className="form-textarea"
            name="mesage"
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
              {mailSent && <div className="success">Thank you for contacting Us, we will get back to you shortly.</div>}
              {error && <div className="error">Please fill the complete form</div>}
            </div>
      </form>
    </div>
  );
}
