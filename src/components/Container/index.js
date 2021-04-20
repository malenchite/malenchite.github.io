import { motion } from "framer-motion";
import "./style.css";


const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.25
};


function Container(props) {
  return (
    <motion.main
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={pageTransition}
      className="container pt-4 pl-5 pr-5 clearfix"
    >
      {props.children}
    </motion.main>
  );

}

export default Container;