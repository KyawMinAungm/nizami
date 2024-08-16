import { Variants } from "framer-motion";

export const slideInFromBottom : Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration : 0.5,
        type : "tween",

      },
    },
    exit: { opacity: 0, y: 100, transition: { duration: 0.3 } },
  };

export const fadeIn : Variants =  {
    hidden: { opacity: 0 },        // Initial state: fully transparent
    visible: {
      opacity: 1,                  // Final state: fully opaque
      transition: {
        duration: 0.5,             
        ease: 'easeInOut',         
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },  // Optional exit state
  };