import React, { useState, useRef } from "react";
import styles from "../../styles/style";
import { BorderBox, Button } from "../uiComponents/index";
import support from "../../assets/support.svg";
import plusIcon from "../../assets/plus.png";
import minusIcon from "../../assets/minus.png"; // you'll need an icon for minus

const faqData = [
  {
    id: 1,
    question: "What should I do on my first trip to Rome?",
    answer: "Content for first trip to Rome.",
  },
  {
    id: 2,
    question: "What are some hidden gems to see in Rome?",
    answer: "Content for hidden gems in Rome.",
  },
  {
    id: 3,
    question: "How much time should I spend in Rome?",
    answer: "Content for time spent in Rome.",
  },
  {
    id: 4,
    question: "What food is Rome known for?",
    answer: "Content for Rome's food.",
  },
  {
    id: 5,
    question: "What is the best way to get around Rome?",
    answer: "Content for getting around in Rome.",
  },
];

const FAQContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openId, setOpenId] = useState(null);
  const contentRef = useRef({});

  const toggleFAQ = (id) => {
    if (openId === id) {
      setOpenId(null); // If clicked again, close it
    } else {
      setOpenId(id); // Else, open the clicked one
    }
  };
  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.marginX} ${styles.flexBetween} `}
      >
        <div className="FaqBox w-[40%] pr-20">
          <p className={`${styles.subheading}`}>Frequently asked questions</p>
          <p className={`${styles.subheading2}`}>
            {" "}
            Here are some of our most asked questions.{" "}
          </p>
          <div className="mt-10 flex justify-between pl-4">
            <p className={`${styles.subheading2} font-semibold text-[#1C2024]`}>
              Still Need Help? <br /> We're Here For You <br />{" "}
              <Button iconSrc="" buttonText="Chat With Us" className={`mt-2`} />
            </p>
            <img src={support} alt="image" className="w-28 h-auto" />
          </div>
        </div>
        <div className="FaqQuestion w-[70%]">
          {faqData.map((faq) => (
            <BorderBox
              key={faq.id}
              className="mb-4 overflow-hidden border-stone-400"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex items-center  w-full focus:outline-none"
              >
                <img
                  src={openId === faq.id ? minusIcon : plusIcon}
                  alt={openId === faq.id ? "Collapse" : "Expand"}
                  className="transition-transform duration-500"
                  style={{
                    transform:
                      openId === faq.id ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
                <span
                  className={`ml-4 ${styles.subheading2} font-semibold text-[#161719]`}
                >
                  {faq.question}
                </span>
              </button>
              <div
                ref={(el) => (contentRef.current[faq.id] = el)}
                className={`${styles.paragraph2} ml-8 transition-all duration-500 ease-in-out`}
                style={{
                  maxHeight:
                    openId === faq.id
                      ? `${contentRef.current[faq.id]?.scrollHeight}px`
                      : "0",
                  opacity: openId === faq.id ? "1" : "0",
                }}
              >
                {faq.answer}
              </div>
            </BorderBox>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQContainer;
