import { HERO_CONTENT } from "../constants";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col items-center my-20">
        <h1 className="text-[#C59424] text-6xl lg:text-[10rem] p-2 uppercase font-bold ">
          {HERO_CONTENT.title}
        </h1>
        <p className="lg:mt-6 text-xl mb-4 font-medium tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>
        <img
          src={HERO_CONTENT.image}
          className="w-full h-auto object-cover rounded-2xl p-2"
          alt="Hero"
        ></img>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 h-64">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: [40, Math.random() * 200 + 50, 40],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.05,
            }}
            className="w-3 bg-[#C59424] rounded-t-md"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
