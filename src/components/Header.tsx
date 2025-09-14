import { Bell, MessageCircle, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileimage from "../assets/profileimage.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white' : 'bg-[#e7cde6]'
    } md:relative md:bg-[#e7cde6]`}>
      <div className="relative flex items-center justify-center p-4 md:px-6 md:py-6">
        <ArrowLeft className="absolute left-4 w-6 h-6 text-gray-800 md:hidden" />
        <h1 className="text-lg font-semibold text-gray-900 md:text-2xl">Dashboard</h1>
        <div className="absolute right-4 w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
          <img 
            src={profileimage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-16 hidden md:flex items-center gap-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <MessageCircle className="w-6 h-6 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
        </div>
      </div>
      <div className="md:hidden">
        <svg 
          viewBox="0 0 375 20" 
          className={`w-full h-5 ${isScrolled ? 'fill-white' : 'fill-[#e7cde6]'}`}
        >
          <path d="M0,0 Q187.5,20 375,0 L375,0 L0,0 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Header;