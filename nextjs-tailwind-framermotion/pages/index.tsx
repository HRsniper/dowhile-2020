import React from "react";

import Card from "../src/components/Card";

function Home(): JSX.Element {
  return (
    <main>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-800 text-center">
        Construindo sites modernos com agilidade e animações.
      </h1>

      <section className="grid w-full grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4 mt-10 md:mt-20">
        <Card href={"/nextjs"} imageSrc={"/img/nextjs.svg"} layoutId={"nextjs-logo"} />
        <Card href={"/tailwindcss"} imageSrc={"/img/tailwindcss.svg"} layoutId={"tailwindcss-logo"} />
        <Card href={"/framermotion"} imageSrc={"/img/framermotion.svg"} layoutId={"framermotion-logo"} />
      </section>
    </main>
  );
}

export default Home;
