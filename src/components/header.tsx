"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const toggleSubmenu = (label: string) => {
    setExpandedSubmenu(expandedSubmenu === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full flex-col justify-center">
      <div className="sticky top-0 z-50 w-full flex justify-center">
        <div className="container flex h-16 items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={163}
              height={100}
              className="h-8 w-auto animate-fade-in duration-700"
            />

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
                      <DropdownMenuContent align="start" className="w-48">
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
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t text-center">
          <nav className="container py-4 space-y-4 mx-auto">
            {navs.map((nav) => (
              <div
                key={nav.label}
                className="flex flex-col gap-2 justify-center items-center"
              >
                {nav.hasDropdown ? (
                  <div className="flex flex-col justify-center items-center w-full">
                    <button
                      onClick={() => toggleSubmenu(nav.label)}
                      className="flex items-center justify-center gap-2 w-full py-2"
                    >
                      <span className="text-sm font-medium hover:text-primary transition-colors">
                        {nav.label}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expandedSubmenu === nav.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedSubmenu === nav.label
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-2 justify-center items-center w-full bg-black/10 py-2 animate-fade-in">
                        {nav.subMenuItems?.map((item, index) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm py-2 w-full hover:bg-black/5 animate-slide-down"
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animationFillMode: "both",
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={nav.href}
                    className="block text-sm font-medium hover:text-primary transition-colors hover:bg-white/5 w-full text-center py-4"
                  >
                    {nav.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
              <button className="w-full text-sm font-medium py-[10px] px-[18px] hover:bg-[#FDE933] hover:text-black transition-colors relative overflow-hidden group cursor-pointer">
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-[#FDE933] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </button>
              <button className="w-full text-sm font-medium text-[#FDE933] py-[10px] px-[18px] hover:bg-[#FDE933] hover:text-black transition-colors relative overflow-hidden group cursor-pointer">
                <span className="relative z-10">Sign Up</span>
                <span className="absolute inset-0 bg-[#FDE933] transform translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
