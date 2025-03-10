import { motion } from "framer-motion";


const Progress = ({ percentage, delay = 0 }) => {
  return (
    <motion.div
      className="progress"
      initial={{ width: 0 }}
      animate={{ width: `${percentage}%` }}
      transition={{ duration: 1.5, ease: "easeOut", delay }}
    />
  );
};

export default Progress;
