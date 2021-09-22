import React from 'react';
import './contact.styles.scss';
import {FaPhoneAlt} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';

const ContactPage = () => (
    <div className='contact-page'>
        <div className='image-container'>
            <h1>Get in touch</h1>
            <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
        </div>
        <div className='contents'>
            <div className='call'>
                <FaPhoneAlt className='phone-icon' />
                <h3>Talk to Agent</h3>
                <p>Interested in buying but got some issues?<br/>We are here to help. Give us a call...</p>
                <h3>Call:  <a href='tel:+1 234 5678'>+1 234 567 8901</a></h3>
            </div>
            <div className='email'>
                <GrMail className='email-icon' />
                <h3>Contact Customer Support</h3>
                <p>Sometimes it happens you don't want to talk?<br/>We are here to respond you over the chat.</p>
                <a href='mailto: support@help.com'>Contact Support</a>
            </div>
        </div>
    </div>
);
export default ContactPage;