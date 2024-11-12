import { motion, AnimatePresence } from 'framer-motion';
import {
  RiCloseCircleFill,
  RiArrowRightCircleFill,
} from 'react-icons/ri';
import { Provinsi } from '@/types/Provinsi.types';

const Popup = ({
  setIsOpen,
  area,
}: {
  setIsOpen: () => void;
  area: Provinsi | null;
}) => {
  return (
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
        className="absolute z-30 bottom-64"
      >
        <div className="bg-[rgba(0,0,0,1)] relative">
          <div className="flex items-center gap-4 border-yellow-500 border-2">
            <figure>
              <img
                src={area.logoUrl}
                alt="gambar"
                className="max-w-[200px] h-28 object-cover border-yellow-500 border-2 p-2"
              />
            </figure>

            <div className="flex items-center justify-between gap-6 mr-6">
              <div>
                <h1 className="text-white font-medium text-3xl tracking-wide">
                  {area.name}
                </h1>
              </div>
              <div className="absolute top-[-12px] right-[-12px] bg-black rounded-full">
                <RiCloseCircleFill
                  size={30}
                  color="rgb(234 179 8)"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                />
              </div>
              <a
                href={`/provinsi/${area.id}`}
                className="w-10 text-white bg-black rounded-full hover:scale-110 transition"
              >
                <RiArrowRightCircleFill
                  size={34}
                  color="rgb(234 179 8)"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
