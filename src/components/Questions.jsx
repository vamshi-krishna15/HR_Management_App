import React from "react";
import { useState } from 'react';



const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is Tailwind CSS?",
    answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    question: "How do I use React?",
    answer: "You can use React by creating components and composing them to build complex UIs.",
  },
  {
    question: "How do I use Tailwind CSS?",
    answer: "You can use Tailwind CSS by applying utility classes directly in your HTML or JSX.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <span>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Questions;