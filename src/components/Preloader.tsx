import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedFokel");
    if (!hasVisited) {
      setIsLoading(true);
      sessionStorage.setItem("hasVisitedFokel", "true");
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ 
              rotateY: [0, 360],
              scale: 1.5,
            }}
            exit={{ 
              scale: 50, 
              opacity: 0,
            }}
            transition={{ 
              rotateY: { duration: 0.8, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, ease: "easeInOut" },
              exit: { duration: 1, ease: [0.76, 0, 0.24, 1] }
            }}
            className="w-24 h-24 sm:w-32 sm:h-32 perspective-1000 transform-style-3d origin-center"
          >
            <img 
              src="/favicon.png" 
              alt="Fokel Loading" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
