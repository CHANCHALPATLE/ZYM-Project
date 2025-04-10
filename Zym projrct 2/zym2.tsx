// src/components/Header.tsx
// Navigation header with responsive menu
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { User, LogOut, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <span className="font-bold text-2xl text-zym-blue">ZYM</span>
            <span className="font-medium text-lg">SPORT HUB</span>
          </Link>

          {/* Mobile menu button */}
          {isMobile && (
            <button 
              className="p-2 text-foreground" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/category/zym-sport" className="nav-link">ZYM SPORT +</Link>
              <Link to="/category/variety-packs" className="nav-link">VARIETY PACKS +</Link>
              <Link to="/category/accessories" className="nav-link">ACCESSORIES +</Link>
            </nav>
          )}

          {/* Desktop Actions */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <Link to="/account">
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link to="/login">
                    <Button variant="ghost" size="sm">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="default" size="sm">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/category/zym-sport" className="nav-link" onClick={toggleMenu}>ZYM SPORT +</Link>
              <Link to="/category/variety-packs" className="nav-link" onClick={toggleMenu}>VARIETY PACKS +</Link>
              <Link to="/category/accessories" className="nav-link" onClick={toggleMenu}>ACCESSORIES +</Link>
            </nav>
            
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link to="/cart" onClick={toggleMenu} className="flex items-center space-x-2 py-1">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
              </Link>
              
              {isLoggedIn ? (
                <>
                  <Link to="/account" onClick={toggleMenu} className="flex items-center space-x-2 py-1">
                    <User className="h-5 w-5" />
                    <span>Account</span>
                  </Link>
                  <Button variant="ghost" className="justify-start pl-0" onClick={() => { handleLogout(); toggleMenu(); }}>
                    <LogOut className="h-5 w-5 mr-2" />
                    <span>Logout</span>
                  </Button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="ghost" className="w-full justify-start">Login</Button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu}>
                    <Button variant="default" className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
