import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoEsperanca from "@/assets/logo-esperanca.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Explorar Vaquinhas", href: "#explorar" },
    { label: "Entrar", href: "#entrar" },
    { label: "Cadastrar", href: "#cadastrar" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoEsperanca} alt="Esperança do Bem" className="h-14 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link text-sm">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="btn-primary text-sm">
              Criar Campanha
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-slide-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="btn-primary text-sm w-full mt-2">
                Criar Campanha
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
