"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [isMounted, setIsMounted] = useState(false);

  // Handle animation mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView && isMounted ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        hidden: { opacity: 0, y: 40, transition: { duration: 0.7 } },
      }}
      className="w-full pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-20 md:pb-24 overflow-hidden"
    >
      <div className="  flex flex-col md:flex-row items-center md:items-start justify-between gap-6 px-0 md:pl-[6em] md:pr-0">
        {/* Left: Headline and CTA */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start max-w-2xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-4xl md:text-[60px] lg:text-[75px] font-bold leading-tight sm:leading-tight md:leading-[1.1] text-center md:text-left mb-4 md:mb-6 bg-gradient-to-r from-[#7D7D7D] via-white to-[#7D7D7D] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get a<br className="hidden md:block" />{" "}
            <span className="md:inline">Hydrogen card,</span>
            <br className="hidden md:block" />{" "}
            <span className="md:inline">no maintenance</span>
            <br className="hidden md:block" />{" "}
            <span className="md:inline">fee.</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 md:mb-8 text-center md:text-left max-w-lg"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Request a Hydrogen Visa card on the Hydrogen app. We&apos;ll deliver
            it to you or you can pick it up whenever you&apos;re ready.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/app-store-btn.png"
                alt="App Store"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer"
                priority
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/google-play-btn.png"
                alt="Google Play"
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Card and Woman Image - Positioned better on mobile */}
        <motion.div
          className="flex-1 flex items-end justify-end relative w-full  sm:max-w-sm md:max-w-lg mt-8 md:mt-0  "
          initial={{ opacity: 0, x: 20 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Card image with hover effect */}
          <motion.div
            className="absolute -left-4  top-1/2 -translate-y-1/2 z-10 origin-center"
            whileHover={{ rotate: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/luctalks-card.png"
              alt="Hydrogen Card"
              width={530}
              height={340}
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[655px] h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Woman holding phone */}
          <motion.div
            className="relative z-20 ml-16  sm:ml-20 md:ml-28 lg:ml-32"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/lady-holding-phone.png"
              alt="Woman holding phone"
              width={340}
              height={340}
              className="w-[400px] sm:w-[250px] md:w-[400px] lg:w-[655px] h-auto rounded-xl object-cover "
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
