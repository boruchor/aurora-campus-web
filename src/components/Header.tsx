
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { 
  Home, Book, BookOpen, Research, 
  User, Building, Calendar, Mail, 
  Menu, X, ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItem = {
  name: string;
  href: string;
  icon?: React.ElementType;
  submenu?: {
    name: string;
    href: string;
  }[];
};

const navItems: NavItem[] = [
  { 
    name: "Home", 
    href: "/", 
    icon: Home 
  },
  { 
    name: "About", 
    href: "/about", 
    icon: User,
    submenu: [
      { name: "Mission & Vision", href: "/about#mission" },
      { name: "History", href: "/about#history" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Facts & Figures", href: "/about#facts" },
    ]
  },
  { 
    name: "Academics", 
    href: "/academics", 
    icon: Book,
    submenu: [
      { name: "Undergraduate Programs", href: "/academics#undergraduate" },
      { name: "Graduate Programs", href: "/academics#graduate" },
      { name: "Departments & Schools", href: "/academics#departments" },
      { name: "Academic Calendar", href: "/academics#calendar" },
    ]
  },
  { 
    name: "Research", 
    href: "/research", 
    icon: Research,
    submenu: [
      { name: "Research Centers", href: "/research#centers" },
      { name: "Publications", href: "/research#publications" },
      { name: "Partnerships", href: "/research#partnerships" },
      { name: "Innovation", href: "/research#innovation" },
    ]
  },
  { 
    name: "Admissions & Aid", 
    href: "/admissions", 
    icon: BookOpen,
    submenu: [
      { name: "Undergraduate Admission", href: "/admissions#undergraduate" },
      { name: "Graduate Admission", href: "/admissions#graduate" },
      { name: "Financial Aid & Scholarships", href: "/admissions#aid" },
      { name: "Visit Campus", href: "/admissions#visit" },
    ]
  },
  { 
    name: "Campus Life", 
    href: "/campus-life", 
    icon: Building,
    submenu: [
      { name: "Housing", href: "/campus-life#housing" },
      { name: "Student Organizations", href: "/campus-life#organizations" },
      { name: "Athletics", href: "/campus-life#athletics" },
      { name: "Arts & Culture", href: "/campus-life#arts" },
    ]
  },
  { 
    name: "News & Events", 
    href: "/news-events", 
    icon: Calendar,
    submenu: [
      { name: "Latest News", href: "/news-events#news" },
      { name: "Upcoming Events", href: "/news-events#events" },
      { name: "Academic Calendar", href: "/news-events#calendar" },
      { name: "Press Releases", href: "/news-events#press" },
    ]
  },
  { 
    name: "Contact", 
    href: "/contact", 
    icon: Mail 
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-aurora-dark">Aurora</span>
              <span className="text-aurora ml-1">University</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href={item.href}
                  className="nav-link group flex items-center"
                  onClick={item.submenu ? (e) => {
                    e.preventDefault();
                    toggleSubmenu(item.name);
                  } : undefined}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </a>
                
                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-aurora-light hover:text-white transition-colors"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="border-aurora text-aurora hover:bg-aurora hover:text-white"
              >
              Visit
            </Button>
            <Button 
              variant="default"
              className="bg-aurora hover:bg-aurora-dark"
              >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navItems.map((item) => (
              <div key={item.name}>
                <div 
                  className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                  onClick={item.submenu ? () => toggleSubmenu(item.name) : undefined}
                >
                  <a href={item.href}>
                    <div className="flex items-center">
                      {item.icon && <item.icon className="mr-3 h-5 w-5" />}
                      {item.name}
                    </div>
                  </a>
                  {item.submenu && (
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 transition-transform",
                        openSubmenu === item.name && "rotate-180"
                      )} 
                    />
                  )}
                </div>
                
                {/* Mobile Submenu */}
                {item.submenu && openSubmenu === item.name && (
                  <div className="pl-10 pr-3 space-y-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 pb-2">
              <div className="flex items-center space-x-3 px-3">
                <Button 
                  variant="outline"
                  className="border-aurora text-aurora hover:bg-aurora hover:text-white w-1/2"
                  >
                  Visit
                </Button>
                <Button 
                  variant="default"
                  className="bg-aurora hover:bg-aurora-dark w-1/2"
                  >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
