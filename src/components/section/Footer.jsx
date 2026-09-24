const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Footer Content */}
        <div className="grid grid-cols-4 gap-8">

          {/* Modernism */}
          <div>
            <h2 className="text-amber-500 text-lg font-bold mb-3">
              Modernism
            </h2>

            <p className="text-stone-400 text-xs leading-5 max-w-xs">
              Creating beautiful, functional spaces that
              reflect your unique style and needs.
            </p>

            {/* Social / Contact Icons */}
            <div className="flex gap-4 mt-4">

              <a
                href="#"
                className="text-stone-400 hover:text-amber-500"
              >
                ☎
              </a>

              <a
                href="#"
                className="text-stone-400 hover:text-amber-500"
              >
                ✉
              </a>

            </div>
          </div>


          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Services
            </h3>

            <div className="flex flex-col gap-2 text-xs text-stone-400">

              <a href="#" className="hover:text-amber-500">
                Interior Design
              </a>

              <a href="#" className="hover:text-amber-500">
                Space Planning
              </a>

              <a href="#" className="hover:text-amber-500">
                Consultation
              </a>

              <a href="#" className="hover:text-amber-500">
                Project Management
              </a>

            </div>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-2 text-xs text-stone-400">

              <a href="#" className="hover:text-amber-500">
                About Us
              </a>

              <a href="#" className="hover:text-amber-500">
                Our Team
              </a>

              <a href="#" className="hover:text-amber-500">
                Portfolio
              </a>

              <a href="#" className="hover:text-amber-500">
                Contact
              </a>

            </div>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Contact
            </h3>

            <div className="flex flex-col gap-2 text-xs text-stone-400">

              <p>123 Design Street</p>

              <p>New York, NY 10001</p>

              <p>(555) 123-4567</p>

              <p>hello@modernism.com</p>

            </div>
          </div>

        </div>


        {/* Bottom Line */}
        <div className="border-t border-stone-800 mt-8 pt-5 text-center">

          <p className="text-stone-500 text-xs">
            © 2024 Modernism Interior Design. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;