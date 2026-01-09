const Footer = () => {
  return (
    <footer className="bg-[#4FD1C5] text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 text-center md:text-left">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Workzen-Pro</h3>
            <p className="text-white/90 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              WorkZen-Pro was built for the modern workforce — simplifying team
              management, attendance, and scheduling from anywhere in the world.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline text-white/90">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/90">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/90">
                  Customer stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline text-white/90">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/90">
                  Guides & tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/90">
                  Help center
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline text-white/90">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/90">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/90">
                  Media kit
                </a>
              </li>
            </ul>
          </div>

          {/* Try It Today Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Try It Today</h4>
            <p className="text-white/90 text-sm mb-4">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="bg-[#5B9FF8] text-white px-6 py-2 rounded-md font-medium hover:bg-[#4a8de6] transition-colors duration-300 inline-flex items-center gap-2">
              Start today
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/30 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-sm">
          {/* Left Side - Language & Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <span>English</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:underline text-white/90">
                Terms & privacy
              </a>
              <a href="#" className="hover:underline text-white/90">
                Security
              </a>
              <a href="#" className="hover:underline text-white/90">
                Status
              </a>
            </div>
          </div>

          {/* Center - Copyright */}
          <div className="text-white/90 order-3 md:order-2 text-center">
            ©2025 Workzen-Pro by Tech solutions Pro
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-4 order-2 md:order-3">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <span className="text-xl">f</span>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <span className="text-xl">🐦</span>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <span className="text-xl">in</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
