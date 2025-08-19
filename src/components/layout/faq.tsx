"use client";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Faq = () => {
  const Faqs = [
    {
      question: "How does this website help me travel in the city?",
      answer:
        "It brings taxis, buses, and trains together on one platform so you can compare routes, fares, and travel times quickly.",
    },
    {
      question: "Can I see all travel options for my route?",
      answer:
        "Yes! You can view multiple transport options (taxi, bus, train) for the same route and choose what suits you best.",
    },
    {
      question: "Is fare information accurate?",
      answer:
        "We provide fare estimates from verified sources. Prices may vary slightly depending on peak hours or service providers.",
    },
    {
      question: "Can I use it without GPS?",
      answer:
        "Yes. You can manually enter your start and destination points if GPS access is disabled.",
    },
    {
      question: "Does it show live location?",
      answer:
        "Yes, live tracking is available for supported services so you can follow your ride in real-time.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <h2 className="text-subheading text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 md:mb-16 lg:mb-20 max-w-[50%]">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-5xl space-y-4 sm:space-y-6 md:space-y-8">
        {Faqs.map((faq, index) => (
          <div key={index} className="rounded-2xl p-3 sm:p-4 md:p-6 card">
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleFaq(index)}
            >
              <span className=" text-xs sm:text-sm md:text-lg lg:text-xl text-secondary ">
                {faq.question}
              </span>
              {openIndex === index ? (
                <KeyboardArrowUpIcon className="w-5 h-5 text-secondary" />
              ) : (
                <KeyboardArrowDownIcon className="w-5 h-5 text-secondary" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-xs sm:text-sm md:text-lg lg:text-xl text-secondary">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
