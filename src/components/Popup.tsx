import { motion, AnimatePresence } from 'framer-motion';
import {
  RiCloseCircleFill,
  RiArrowRightCircleFill,
} from 'react-icons/ri';

const Popup = ({ setIsOpen, area }) => {
  return (
    <div className="flex flex-col items-center justify-center absolute m-auto inset-0 z-10 bg-[rgba(0,0,0,0.1)]">
      <AnimatePresence>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          exit={{
            opacity: 0,
            scale: 0.0,
            transition: { duration: 0.5 },
          }}
        >
          <div className="bg-[rgba(0,0,0,1)] relative">
            <div className="flex items-center gap-4 border-yellow-400 border-2">
              <figure>
                <img
                  src={area.image}
                  alt="gambar"
                  className="w-[200px] h-28 object-cover border-yellow-400 border-2"
                />
              </figure>

              <div className="flex items-center justify-between gap-6 mr-12">
                <div>
                  <h1 className="text-white font-medium text-3xl tracking-wide">
                    {area.name}
                  </h1>
                  <p className="text-white">
                    {area.nickname}
                  </p>
                </div>
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white mr-4"
                >
                  close
                </button> */}
                <div className="absolute top-[-12px] right-[-12px] bg-black rounded-full">
                  <RiCloseCircleFill
                    size={30}
                    color="#FFD700"
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer"
                  />
                </div>
                <a
                  href={`/map/${area.id}`}
                  className="text-white bg-black rounded-full"
                >
                  <RiArrowRightCircleFill
                    size={34}
                    color="#FFD700"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Popup;
