import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../css/Rightcard.css";
import Card from "./Card";
import imageData from "./Data";

const Rightcard = () => {
  const [cardArr, setCardArr] = useState(imageData);
  const { scrollYProgress } = useScroll();
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0);

      const percentageScrolled =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollAmount(percentageScrolled);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollAmount <= 50) {
      setCurrentPage(1);
    } else if (scrollAmount <= 75) {
      setCurrentPage(2);
    } else {
      setCurrentPage(3);
    }
  }, [scrollAmount]);

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    console.log(currentPage);
    if (currentPage === 1) {
      setCardArr([imageData[0]]);
    } else if (currentPage === 2) {
      setCardArr([imageData[1]]);
    } else {
      setCardArr([imageData[2]]);
    }
  }, [currentPage]);

  return (
    <div className="right-card">
      {cardArr.map((card) => (
        <Card
          imgUrl={card.imgUrl}
          CardTitle1={card.CardTitle1}
          CardTitle2={card.CardTitle2}
          CardDescription={card.CardDescription}
        />
      ))}
      <div className="scroll">
        <span className="page">{currentPage.toString().padStart(2, "0")}</span>
        <div className="scroll-bg">
          <motion.div
            className="scroll-bar"
            style={{
              height: height,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              style={{
                height: barHeight,
              }}
            ></motion.div>
          </motion.div>
        </div>
        <span className="page">03</span>
      </div>
    </div>
  );
};

export default Rightcard;
