const Contact = () => (
    <section id="contact" className="bg-dark-gray text-center py-16 px-4">
        <button className="text-light-blue border border-light-blue px-8 py-3 rounded-lg mb-8 hover:bg-light-blue hover:text-dark-gray transition duration-300">
            Lets Talk
        </button>
            <form className="max-w-3xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name Section */}
                <div className="flex flex-col">
                    <label className="text-light-blue text-sm font-bold mb-2" htmlFor="name">Your Name</label>
                    <input 
                        type="text"
                        id="name"
                        className="bg-darkgray text-light-gray border border-light-blue rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-blue"
                        placeholder="Name"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-light-blue text-sm font-bold mb-2" htmlFor="email">Your Email</label>
                    <input 
                        type="text"
                        id="email"
                        className="bg-darkgray text-light-gray border border-light-blue rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-blue"
                        placeholder="Email"
                    />
                </div>
                {/* Message */}
                <div className="flex flex-col col-span-1 md:col-span-2">
                    <label className="text-light-blue text-sm font-bold mb-2" htmlFor="message">Your Message</label>
                    <textarea 
                        id="message"
                        rows="4"
                        className="bg-dark-gray text-light-gray border border-light-blue rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-blue"
                        placeholder="Enter your message"
                        />
                </div>
                
                {/* Button */}
                <div className="col-span-1 md:col-span-2 text-center">
                    <button className="bg-light-blue text-dark-gray font-bold px-8 py-3 rounded-lg hover:bg-brighter-blue transition duration-300">
                        Send Message <span className="ml-2">📩</span>
                    </button>

                </div>
            </form>
    </section>
);
export default Contact;