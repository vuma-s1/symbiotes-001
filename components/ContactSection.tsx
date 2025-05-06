const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions about our AI-powered design tools? We'd love to hear from you and help you transform your workflow.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-400">hello@relume.io</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-[#d0ed01] transition-colors">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-[#d0ed01] transition-colors">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-[#d0ed01] transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111] p-8 rounded-xl border border-[#6248ff]/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#6248ff]/20 rounded-lg text-white focus:outline-none focus:border-[#d0ed01]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#6248ff]/20 rounded-lg text-white focus:outline-none focus:border-[#d0ed01]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#6248ff]/20 rounded-lg text-white focus:outline-none focus:border-[#d0ed01]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#d0ed01] text-black font-medium rounded-lg hover:bg-[#eaff6b] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;