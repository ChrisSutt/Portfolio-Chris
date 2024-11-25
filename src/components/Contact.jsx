const Contact = () => (
    <section className="contact">
        <h2>Contact Me</h2>
        <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" requiired />
            <textarea placeholder ="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
        <p> Or Reach me at <a href="mailto:Sutt.Chris@outlook.com">Sutt.Chris@outlook.com</a>.</p>
    </section>
);

export default Contact;