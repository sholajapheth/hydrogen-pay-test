"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BenefitsSection() {
  const [isMounted, setIsMounted] = useState(false);

  // Handle animation mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants for list items
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Chat bubble animations
  const chatBubbleVariants = {
    hidden: { opacity: 0, y: 20 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visible: (custom: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3 + 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-0 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left: Image with chat overlays */}
        <motion.div
          className="relative flex-1 flex items-center justify-center w-full max-w-xl mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isMounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={isMounted ? { y: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Image
              src="/images/woman-holding-square-cloth-left.png"
              alt="Smiling woman holding card"
              width={420}
              height={420}
              className="rounded-2xl h-auto w-full sm:h-[380px] md:h-[420px] md:w-[420px] lg:h-[447px] lg:w-[500px] object-cover shadow-2xl"
              priority
            />
          </motion.div>

          {/* Chat overlays with staggered animation */}
          <motion.div
            className="absolute left-0 bottom-8 sm:-left-8 md:-left-14 md:bottom-16 w-40 sm:w-44 md:w-[180px] lg:w-[250px]"
            variants={chatBubbleVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            custom={0}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Image
              src="/images/can-you-share-your.png"
              alt="Chat bubble 1"
              width={180}
              height={48}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="absolute right-0 bottom-0 sm:-right-4 md:-right-8 md:-bottom-8 w-48 sm:w-52 md:w-[220px] lg:w-[280px]"
            variants={chatBubbleVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            custom={1}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Image
              src="/images/what-took-did-you.png"
              alt="Chat bubble 2"
              width={220}
              height={48}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start max-w-xs sm:max-w-sm md:max-w-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-[1.1] text-center md:text-left mb-6 md:mb-8 bg-gradient-to-r from-[#7D7D7D] via-white to-[#7D7D7D] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            Benefits to <br className="hidden md:block" /> Customer
          </motion.h2>

          <motion.ul
            className="space-y-4 text-base sm:text-lg md:text-xl text-[#737373] mb-8 text-center md:text-left"
            variants={listVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
          >
            <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
              An efficiently reliable solution for card{" "}
              <br className="hidden md:block" />
              transaction
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
              Promotes user satisfaction
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
              Guarantees transaction security
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
