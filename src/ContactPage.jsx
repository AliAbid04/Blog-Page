import React from 'react';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <section className="contact-content">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you! Whether you have questions, feedback, or collaboration ideas, feel free to reach out to us through the following methods:</p>
                <ul>
                    <li>Email: contact@explorationechoes.com</li>
                    <li>Phone: +123-456-7890</li>
                    <li>Address: 123 Travel Street, Adventure City, Country</li>
                </ul>
                <h2>Follow Us</h2>
                <p>Stay connected with us on social media for the latest travel updates and inspiration:</p>
                <ul>
                    <li>Facebook: <a href="https://www.facebook.com/explorationechoes">facebook.com/explorationechoes</a></li>
                    <li>Instagram: <a href="https://www.instagram.com/explorationechoes">instagram.com/explorationechoes</a></li>
                    <li>Twitter: <a href="https://www.twitter.com/explorationechoes">twitter.com/explorationechoes</a></li>
                </ul>
            </section>
        </div>
    );
}

export default ContactPage;
