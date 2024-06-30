 "use client"
import { motion } from "framer-motion";
const Transition = () => {
  const goal_varients = {
    initial: {
      //  y: "100%",
       x: "100%",
       width: "100%",
    },
    animate: {
      //  y: "0%",
       x: "0%",
       width: "0%",
    },
    exit: {
      //  y: ["0%", "100%"],
       x: ["0%", "100%"],
       width: ["0%", "100%"],
    },
 }

  return (
    <div>
    <motion.div
    variants={goal_varients}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{delay:.2 , duration:.6 , ease:"easeInOut"}}
    className=" fixed top-0 bottom-0 right-full  bg-[#2e2257] h-screen w-screen z-50"
    />
    <motion.div
    variants={goal_varients}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{delay:.4 , duration:.6 , ease:"easeInOut"}}
    className=" fixed top-0 bottom-0 right-full  bg-[#303a74] h-screen w-screen z-40"
    />
    <motion.div
    variants={goal_varients}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{delay:.2 , duration:.6 , ease:"easeInOut"}}
    className=" fixed top-0 bottom-0 left-0  bg-[#813539] h-screen w-screen z-30"
    />
 </div>
  );
};

export default Transition;
