import React from "react";
import { motion } from "framer-motion";

import LinkToHome from "../src/components/LinkToHome";

const TailwindCss = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/tailwindcss.svg" layoutId="tailwindcss-logo" transition={{ duration: 0.5 }} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <LinkToHome href="/" text="Voltar para a Home" />
      </motion.div>
    </div>
  );
};

export default TailwindCss;
