import React, {useRef, useState} from 'react';
import './Contact.css';
import {PhoneOutlined, MailOutlined} from '@ant-design/icons';
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [sent, setSent] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_m4qmr7y',
            'template_ct2fy8i',
            formRef.current,
            'user_JQW79WdJCGlSKZF3OZlVP'
        )
        .then((result) => {
          console.log(result.text);
          setSent(true);
        }, (error) => {
          console.log(error.text);
        });
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your projects</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <PhoneOutlined />
                            (+91) 8130310862
                        </div>
                        <div className="c-info-item">
                            <MailOutlined />
                            ashish012699@gmail.com
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch.
                    </p>
                    <form ref = {formRef} onSubmit={submitHandler}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="email" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Pen down your thoughts here..." name="message" />
                        <button> Submit </button>
                        {sent && 
                            <h3 id="sent-ack">Mail sent Successfully!</h3>
                        }
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact
