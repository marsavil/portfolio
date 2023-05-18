import Layout from "../components/Layout";
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'


const contact = () => {
  const form = useRef()

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm("service_cgr3v0q", "template_har759e", form.current, "NQWsussD8kfN-i9Nz").then(res => {
      alert("Email sent successfully!")
      console.log(res)

    })}

return(
  <Layout>
    <form ref={form} onSubmit={sendEmail}>
    <div className="card card-body bg-secondary col-md-8 py-2" style={{marginBottom:"5px"}} >
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" name="user_email" placeholder="name@example.com"></input>
      </div>
      <div className="mb-3 py-2">
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name" name="name"></input>
      </div>
      <div className="mb-3 py-2">
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" name="subject"></input>
      </div>
      <div className="mb-3 py-2">
        <label for="exampleFormControlTextarea1" className="form-label">Your message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
      </div>
    </div>
    <button  class="btn btn-secondary" type="submit">Submit</button>
    </form>
  </Layout>
)
}

export default contact