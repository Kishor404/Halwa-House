import "../Styles/Contact.css";
import "../Styles/Styles.css";

const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Get in touch with us for any questions or support.</p>
        </div>
    );
};

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <h2>Contact</h2>
            <div className="contact-details">
                
                <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.9377550433014!2d77.63073708170018!3d9.508373617700599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06dddf06b6f78f%3A0x8d460649860f2aab!2sSri%20Andal%20Milk%20Kova.!5e0!3m2!1sen!2sin!4v1731475485889!5m2!1sen!2sin" width="500" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

                <div className="address">
                    <h3>| Address</h3><br/>
                    <p>404, Street Not Found,</p>
                    <p>City Unavailable,</p>
                    <p>Tamilnadu - 609 404</p><br/>
                    <p>Phone: +91 9876543210</p>
                    <p>Email: support@lalahalwa.com</p>
                </div>
            </div>
        </div>
    );
};

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <div className="form-group">
                <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
                <input type="email" placeholder="Email ID" />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
                <textarea placeholder="Message..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
        </div>
    );
};



const Contact = () => {
    return (
        <div>
            <HeroBanner />
            <ContactInfo />
            <ContactForm />
        </div>
    );
};

export default Contact;