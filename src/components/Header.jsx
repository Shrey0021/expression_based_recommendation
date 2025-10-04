import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        MoodFlix
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a className="text-base tracking-wider transition-colors hover:text-grey-300 z-50" href="">
          Movies 
        </a>
        <Link to="/camera" className="text-base tracking-wider transition-colors hover:text-grey-300 z-50">
          Recommendation
        </Link>

      </nav>

      {/* ✅ Changed to Link */}
      <Link 
        to="/signup"
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none 
        font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
      >
        SignUp
      </Link>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>
    </header>
  );
};

export default Header;
