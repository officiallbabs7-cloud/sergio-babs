import { motion } from "motion/react";
import { title } from "motion/react-client";

const Mixtapes = () => {
  const mixtapes = [
    {
      id: 1,
      title: "MIDNIGHT FREQUENCY MIXTAPE",
      embedUrl:
        "https://audiomack.com/embed/officiallbabs7/song/midnight-frequency-mixtape?background=1",
    },
    {
      id: 2,
      title: "TURNTABLE WIZARD MIXTAPE 2",
      embedUrl:
        "https://audiomack.com/embed/officiallbabs7/song/turntable-wizard-mixtape-2?background=1",
    },
    {
      id: 3,
      title: "GOOD VIBES MIXTAPE",
      embedUrl:
        "https://audiomack.com//embed/officiallbabs7/song/good-vibes-mixtape",
    },
  ];

  return (
    <section id="mixtapes" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          className="text-xl lg:text-3xl text-center text-white mb-12 uppercase"
        >
          Mixtapes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mixtapes.map((mix) => (
            <motion.div
              key={mix.id}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] p-4 rounded-2xl border border-zinc-800 shadow-xl"
            >
              <h3 className="text-xl text-white mb-4 font-medium">
                {mix.title}
              </h3>

              <div className="rounded-xl overflow-hidden">
                <iframe
                  src={mix.embedUrl}
                  scrolling="no"
                  width="100%"
                  height="252"
                  scroll="no"
                  frameBorder="0"
                  title={mix.title}
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://audiomack.com/officiallbabs7"
            target="_blank"
            className="bg-[#C59424] text-black px-8 py-3 rounded-full font-bold hover:bg-[#C59424]/90 transition-all"
          >
            VIEW ALL ON AUDIOMACK
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mixtapes;
