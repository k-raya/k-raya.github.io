import React from 'react'

export default function Contact() {

    return (
        <div className="contact-container animate__animated animate__bounceIn">
            <div id='contact-text'>
                <h1>Lets talk</h1>
                <p>Fill the form below to get in touch!</p>
            </div>
            <div className="form-container">
                < form action="https://api.web3forms.com/submit" method="POST" id='contact-form' >

                    <input type="hidden" name="access_key" value="f685c27e-b95e-4ee4-b9f5-6069215179ca" />

                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Enter Email" required />
                    <textarea name="message" placeholder='Type your message here...' required></textarea>
                    <input type="hidden" name="redirect" value='https://k-raya.github.io/' />

                    <button type="submit" id='contact-button'>Send</button>
                </form >
            </div >
        </div >
    )
};
