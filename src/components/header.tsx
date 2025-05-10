"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const productSubMenuItems = [
  { label: "Product 1", href: "/products/product-1" },
  { label: "Product 2", href: "/products/product-2" },
  { label: "Product 3", href: "/products/product-3" },
  { label: "Product 4", href: "/products/product-4" },
];

const navs = [
  {
    label: "Products",
    href: "/products",
    hasDropdown: true,
    subMenuItems: productSubMenuItems,
  },
  {
    label: "Business Type",
    href: "/business-type",
  },
  {
    label: "Company",
    href: "/company",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = React.useState<string | null>(
    null
  );
  const [isScrolled, setIsScrolled] = React.useState(false);

  const toggleSubmenu = (label: string) => {
    setExpandedSubmenu(expandedSubmenu === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if page has scrolled more than the viewport height
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      document.body.style.height = "100%";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.height = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.height = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const submenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const submenuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full flex-col justify-center px-4 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md" : ""
      }`}
    >
      <div className="sticky top-0 z-50 w-full flex justify-center">
        <div className="container flex h-16 items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/logo.png"
                alt="logo"
                width={163}
                height={100}
                className="h-8 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {navs.map((nav) => (
                <div key={nav.label} className="relative group">
                  {nav.hasDropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors group-hover:animate-pulse">
                        {nav.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-48">
                        {nav.subMenuItems?.map((item) => (
                          <DropdownMenuItem key={item.label} asChild>
                            <Link href={item.href}>{item.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={nav.href}
                      className="text-sm font-medium hover:text-primary transition-colors relative group-hover:animate-bounce"
                    >
                      {nav.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FDE933] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex gap-2">
            <button className="text-sm font-medium py-[10px] px-[18px] hover:bg-[#FDE933] hover:text-black transition-colors relative overflow-hidden group cursor-pointer">
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-[#FDE933] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
            </button>
            <button className="text-sm font-medium text-[#FDE933] py-[10px] px-[18px] hover:bg-[#FDE933] hover:text-black transition-colors relative overflow-hidden group cursor-pointer">
              <span className="relative z-10">Sign Up</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-[#FDE933]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 pt-16 md:hidden overflow-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.nav className="container py-8 space-y-6 mx-auto px-6">
              {navs.map((nav, idx) => (
                <motion.div
                  key={nav.label}
                  className="flex flex-col gap-2 justify-center items-center"
                  variants={navItemVariants}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                >
                  {nav.hasDropdown ? (
                    <div className="flex flex-col justify-center items-center w-full">
                      <motion.button
                        onClick={() => toggleSubmenu(nav.label)}
                        className="flex items-center justify-center gap-2 w-full py-3 text-lg font-medium border-b border-white/10"
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-white hover:text-[#FDE933] transition-colors">
                          {nav.label}
                        </span>
                        <motion.div
                          animate={{
                            rotate: expandedSubmenu === nav.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-5 w-5 text-[#FDE933]" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {expandedSubmenu === nav.label && (
                          <motion.div
                            className="w-full"
                            variants={submenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            <div className="flex flex-col gap-1 w-full bg-white/5 rounded-lg mt-2 overflow-hidden">
                              {nav.subMenuItems?.map((item, index) => (
                                <motion.div
                                  key={item.label}
                                  variants={submenuItemVariants}
                                  custom={index}
                                  whileHover={{
                                    backgroundColor: "rgba(253, 233, 51, 0.1)",
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Link
                                    href={item.href}
                                    className="text-base py-3 px-4 w-full block hover:text-[#FDE933] transition-colors text-center"
                                  >
                                    {item.label}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      className="w-full"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={nav.href}
                        className="block text-lg font-medium hover:text-[#FDE933] transition-colors w-full text-center py-3 border-b border-white/10"
                      >
                        {nav.label}
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col gap-4 pt-8 mt-8 border-t border-white/10"
                variants={navItemVariants}
              >
                <motion.button
                  className="w-full text-base font-medium py-3 px-6 bg-white/5 hover:bg-[#FDE933] hover:text-black transition-all duration-300 rounded-lg relative overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Login</span>
                  <motion.span
                    className="absolute inset-0 bg-[#FDE933]"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  className="w-full text-base font-medium text-[#FDE933] py-3 px-6 border border-[#FDE933] hover:bg-[#FDE933] hover:text-black transition-all duration-300 rounded-lg relative overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Sign Up</span>
                  <motion.span
                    className="absolute inset-0 bg-[#FDE933]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
