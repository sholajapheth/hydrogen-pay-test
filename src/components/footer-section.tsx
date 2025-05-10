import Image from "next/image";

const productLinks = [
  "Overview",
  "Features",
  "Solutions",
  "Tutorials",
  "Pricing",
  "Releases",
];
const companyLinks = [
  "About us",
  "Careers",
  "Press",
  "News",
  "Media kit",
  "Contact",
];
const resourcesLinks = [
  "Blog",
  "Newsletter",
  "Events",
  "Help centre",
  "Tutorials",
  "Support",
];
const socialLinks = [
  { icon: "/icons/twitter.svg", alt: "Twitter" },
  { icon: "/icons/linkedin.svg", alt: "LinkedIn" },
  { icon: "/icons/facebook.png", alt: "Facebook" },
  { icon: "/icons/github.png", alt: "GitHub" },
  { icon: "/icons/angellist.png", alt: "AngelList" },
  { icon: "/icons/dribbble.png", alt: "Dribbble" },
];
const legalLinks = [
  "Terms",
  "Privacy",
  "Cookies",
  "Licenses",
  "Settings",
  "Contact",
];

export default function FooterSection() {
  return (
    <footer className="w-full  pt-16 pb-8 px-4 md:px-0">
      {/* Newsletter Signup */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-12 ">
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            Join our newsletter
          </h3>
          <p className="text-neutral-400 text-base">
            We&apos;ll send you a nice letter once per week. No spam.
          </p>
        </div>
        <form className="flex w-full max-w-md md:max-w-xs mx-auto md:mx-0 mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-l-md px-4 py-2 bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#FDE933]"
          />
          <button
            type="submit"
            className="bg-[#FCE300] text-black font-semibold px-6 py-2 rounded-r-md hover:bg-yellow-300 transition-colors cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Main */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
        {/* Logo & tagline */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <Image
            src="/images/logo.png"
            alt="Hydrogen Logo"
            width={120}
            height={40}
            className="mb-2"
          />
          <p className="text-neutral-400 text-sm">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        {/* Columns */}
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li
                  key={link}
                  className="text-neutral-400 text-sm hover:text-[#FDE933] cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li
                  key={link}
                  className="text-neutral-400 text-sm hover:text-[#FDE933] cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li
                  key={link}
                  className="text-neutral-400 text-sm hover:text-[#FDE933] cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li
                  key={link}
                  className="text-neutral-400 text-sm hover:text-[#FDE933] cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Social */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between border-t border-[#FCE300] pt-6 mt-4 gap-4">
        <span className="text-neutral-500 text-xs">
          © 2023 Untitled UI. All rights reserved.
        </span>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <span key={social.alt} className="inline-block">
              <Image
                src={social.icon}
                alt={social.alt}
                width={22}
                height={22}
                className="opacity-80 h-[20px] w-auto hover:opacity-100 transition-opacity"
              />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
