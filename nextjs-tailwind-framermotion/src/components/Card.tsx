import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// interface CardProps {
type CardProps = {
  href: string;
  imageSrc: string;
  layoutId: string;
};

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7,
    },
  },
};

function Card({ href, imageSrc, layoutId }: CardProps): JSX.Element {
  return (
    <Link href={href}>
      <motion.div
        className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition"
        variants={variants}
      >
        <motion.img src={imageSrc} className="w-full h-full" layoutId={layoutId} />
      </motion.div>
    </Link>
  );
}

export default Card;