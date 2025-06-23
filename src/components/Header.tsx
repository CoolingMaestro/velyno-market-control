
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-primary w-10 h-10 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold text-velyno-dark">Velyno</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/ozellikler" className="text-velyno-gray hover:text-velyno-primary font-medium transition-colors">
              Özellikler
            </Link>
            <Link to="/fiyatlandirma" className="text-velyno-gray hover:text-velyno-primary font-medium transition-colors">
              Fiyatlandırma
            </Link>
            <Link to="/blog" className="text-velyno-gray hover:text-velyno-primary font-medium transition-colors">
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/giris">
              <Button variant="outline" className="btn-outline">
                Giriş Yap
              </Button>
            </Link>
            <Link to="/kayit">
              <Button className="btn-secondary">
                Ücretsiz Dene
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-velyno-gray hover:text-velyno-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/ozellikler" 
                className="text-velyno-gray hover:text-velyno-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Özellikler
              </Link>
              <Link 
                to="/fiyatlandirma" 
                className="text-velyno-gray hover:text-velyno-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fiyatlandırma
              </Link>
              <Link 
                to="/blog" 
                className="text-velyno-gray hover:text-velyno-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Link to="/giris" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full btn-outline">
                    Giriş Yap
                  </Button>
                </Link>
                <Link to="/kayit" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-secondary">
                    Ücretsiz Dene
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
