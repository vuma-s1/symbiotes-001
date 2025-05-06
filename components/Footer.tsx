const Footer = () => {
  return (
    <footer className="bg-[#111] border-t border-[#6248ff]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#d0ed01] to-[#eaff6b] text-transparent bg-clip-text mb-4">Relume</h3>
            <p className="text-gray-400 text-sm">Use AI as your design ally, not a replacement. Instantly generate Sitemaps, Wireframes and Style Guides.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-[#d0ed01] transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-[#d0ed01] transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#d0ed01] transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-gray-400 hover:text-[#d0ed01] transition-colors">Blog</a></li>
              <li><a href="#docs" className="text-gray-400 hover:text-[#d0ed01] transition-colors">Documentation</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-[#d0ed01] transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@relume.io" className="text-gray-400 hover:text-[#d0ed01] transition-colors">hello@relume.io</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#d0ed01] transition-colors">Contact Form</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#6248ff]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Relume. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-[#d0ed01] transition-colors text-sm">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-[#d0ed01] transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;