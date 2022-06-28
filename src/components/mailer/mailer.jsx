import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './mailer.css'

export const Mailer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_335l3ar', 'template_n3pyx1m', e.target, 'WycA8QZlWhZgCZZXC')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email sent!, Thank you for your interest!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='mailContainer'>
            <form ref={form} onSubmit={sendEmail} className='form'>
                <input placeholder='Your name here' type="text" name="from_name" /><p/>
                <input placeholder='Your email adress' type="email" name="user_email" /><p/>
                <textarea placeholder='Your message to me'name="message" /><p/>
                <p/>
                <input type="submit" value="Send" className='button'/>
            </form>
        </div>
    );
};