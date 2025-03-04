import { motion } from "motion/react";

interface AnimatedProps {
  children: React.ReactNode;
}

const AnimatedBlock: React.FC<AnimatedProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBlock;
