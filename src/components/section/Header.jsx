const Header = () => {
  return (
    <nav className="top-0 left-0 w-full h-14 bg-white border-b border-stone-200 z-50">

      <div className="max-w-5xl h-full mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-amber-800 text-xl font-bold">
            Modernism
          </h1>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8 h-full">

          <a
            href="/"
            className="text-amber-800 text-sm h-full flex items-center border-b-2 border-amber-800"
          >
            Home
          </a>

          <a
            href="/"
            className="text-stone-800 text-sm hover:text-amber-800"
          >
            About
          </a>

          <a
            href="/"
            className="text-stone-800 text-sm hover:text-amber-800"
          >
            Services
          </a>

          <a
            href="/"
            className="text-stone-800 text-sm hover:text-amber-800"
          >
            Projects
          </a>

          <a
            href="/"
            className="text-stone-800 text-sm hover:text-amber-800"
          >
            Portfolio
          </a>

        </div>

        {/* Get Started Button */}
        <div>
          <a
            href="/"
            className="bg-amber-800 text-white text-sm px-5 py-2.5 rounded-md hover:bg-amber-900"
          >
            Get Started
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Header;