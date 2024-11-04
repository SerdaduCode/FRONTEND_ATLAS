import { motion, AnimatePresence } from 'framer-motion';

const Popup = ({ setIsOpen, name, nickname, image }) => {
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
          <div className="bg-[rgba(0,0,0,1)]">
            <div className="flex items-center gap-4 border-yellow-600 border-2">
              <figure>
                <img
                  src={image}
                  alt="gambar"
                  className="w-[200px] h-28 object-cover border-yellow-600 border-2"
                />
              </figure>

              <div className="w-full flex items-center justify-between">
                <div>
                  <h1 className="text-white font-medium text-xl">
                    {name}
                  </h1>
                  <p className="text-white">{nickname}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white mr-4"
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Popup;
