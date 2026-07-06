import logo from '../assets/logo.jpg';

function Navbar() {
  return (
    <nav className="px-4 h-16 bg-navbar border-b border-border">
      <div className="flex items-center justify-between max-w-5xl mx-auto h-full px-4">
        <div className="flex gap-2 items-center">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="movie search logo" className="h-10 rounded-md" />
          <span className='text-xl'>
            Movie Search
          </span>
          </a>
        </div>

        <ul className="flex gap-4 items-center">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
