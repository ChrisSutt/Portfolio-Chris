const Contact = () => (
    <section id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-600">Contact Me</h2>
            <form className="mt-8 max-w-lg mx-auto space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"/>
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"/>
                <textarea placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200" rows="5">      
                </textarea>
                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
                    Send
                </button>
            </form>
        </div>
    </section>
);
export default Contact;