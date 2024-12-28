import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Telescope, Sparkles, Search, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
  
    const isHomePage = location.pathname === "/";
    const buttonText = isHomePage ? "Create Post" : "Explore Posts";
    const buttonIcon = isHomePage ? Sparkles : Telescope;
  
    const handleButtonClick = () => {
      navigate(isHomePage ? "/post" : "/");
    };
  
    return (
      <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl flex items-center justify-between mx-auto px-4 py-3">
          <a href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              JOJA AI
            </span>
          </a>
  
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            
            <Button 
              onClick={handleButtonClick}
              text={buttonText}
              Icon={buttonIcon}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            />
          </div>
  
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
  
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-3 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search generated images..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400"
                />
              </div>
              <Button 
                onClick={handleButtonClick}
                text={buttonText}
                Icon={buttonIcon}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              />
            </div>
          </div>
        )}
      </nav>
    );
  };

export default Navbar;
