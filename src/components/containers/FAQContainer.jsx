import React, { useState } from "react";
import styles from "../../styles/style";
import { BorderBox, Button } from "../uiComponents/index";

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
          <p className={`${styles.paragraph2}`}>
            {" "}
            Here are some of our most asked questions.{" "}
          </p>
          <div className="mt-10 flex justify-between">
            <p className={`${styles.paragraph}`}>
              Still Need Help? <br /> We're Here For You <br />{" "}
              <Button iconSrc="" buttonText="Chat With Us" className={`mt-2`} />
            </p>
            <img src="" alt="image" srcset="" />
          </div>
        </div>
        <div className="FaqQuestion w-[70%]">
          {faqData.map((faq) => (
            <BorderBox key={faq.id} className={`mt-4`}>
              <div>
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex items-center w-full"
                >
                  <span>{openId === faq.id ? "-" : "+"}</span>
                  <span className="ml-4">{faq.question}</span>
                </button>
              </div>
              {openId === faq.id && <div className="ml-6">{faq.answer}</div>}
            </BorderBox>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQContainer;
