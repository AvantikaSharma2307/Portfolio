import { motion } from "framer-motion";
import { CardSpotlightDemo } from "../Components/Cards";
import Image from "../assests/receipe.png";
import Image1 from "../assests/aydilooks.jpeg";
import Image2 from "../assests/github_user_finder.png";
import Image3 from "../assests/icetct.png";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Project() {
  return (
    <>
      <motion.div
        className="mt-44"
        id="project"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }} // triggers on partial view
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex justify-center mb-10 md:mb-14">
          Recent Works
        </h1>

        <div className="flex flex-wrap justify-center ml-14 mr-14 gap-10">
          {[
            {
              name: "Receipe project",
              image: Image,
              url: "https://github.com/AvantikaSharma2307/Receipe-Project",
            },
            {
              name: "Github_User_Finder",
              image: Image2,
              url: "https://github.com/AvantikaSharma2307/Innogeeks-web",
            },
            {
              name: "ICETCT",
              image: Image3,
              url: "https://icetct-25.vercel.app/",
            },
            {
              name: "AydiLOOks",
              image: Image1,
              url: "https://github.com/AydiLooks/aydilooks",
            }
          ].map((card, i) => (
            <motion.div
              key={card.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={cardVariants}
            >
              <CardSpotlightDemo
                name={card.name}
                image={card.image}
                url={card.url}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <p className="text-center text-white mt-14">Made with ❤️ by Avantika Sharma</p>
    </>
  );
}
