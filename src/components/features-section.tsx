"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    img: "/images/resturant-mobile-pos-kit-img.png",
    title: "Restaurant Mobile POS Kit",
    desc: "Pick up your card from us or choose our easy delivery option",
  },
  {
    img: "/images/resturant-mobile-pos-kit-img-2.png",
    title: "Restaurant Mobile POS Kit",
    desc: "Pick up your card from us or choose our easy delivery option",
  },
  {
    img: "/images/resturant-mobile-pos-kit-img-3.png",
    title: "Restaurant Mobile POS Kit",
    desc: "Pick up your card from us or choose our easy delivery option",
  },
];

export default function FeaturesSection() {
  const [isMounted, setIsMounted] = useState(false);

  // Handle animation mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full py-16 md:py-24 px-4 md:px-0"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl sm:text-4xl md:text-[60px] lg:text-[75px] font-bold leading-tight sm:leading-tight md:leading-[1.1] text-center md:text-left mb-4 md:mb-6 bg-gradient-to-r from-20%  from-[#7D7D7D]  via-white via-50% to-white to-70% bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Craft the <span className="text-white">perfect card</span>
          <br className="hidden md:block" /> payment{" "}
          <span className="text-white">experience</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          By providing customizable card management service, including card
          payment processing, tokenization, service automation and advanced
          payment security solutions. This service ensures secure, effective,
          and efficient cardholder experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-lg flex flex-col items-center h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full"
              >
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={320}
                  height={200}
                  className="rounded-xl mb-6 w-full h-[250px] object-cover"
                />
              </motion.div>
              <motion.h3
                className="text-xl md:text-[27px] font-semibold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={isMounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              >
                Restaurant Mobile
                <br /> POS Kit
              </motion.h3>
              <motion.p
                className="text-base text-neutral-300"
                initial={{ opacity: 0 }}
                animate={isMounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              >
                {feature.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
