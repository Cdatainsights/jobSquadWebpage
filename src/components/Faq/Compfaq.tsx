"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Do I get a free trial?",
    answer: "1. Yes, there is a free tier that allows you to submit applications for jobs at no cost. However, there is a limit of one application per day.<br>2. You can only view one profile card for yourself.<br>3. You can only apply to the jobs listed on the first page of the LinkedIn job search."
  },
  {
    question: 'What is your refund policy?',
    answer: 'If you decide to cancel your subscription, you can contact us by phone or email. We will process your cancellation and issue a full refund.',
  },
  {
    question: 'Do I get support and tutorials on how to start?',
    answer: 'Sure, our homepage has animated GIFs that provide a detailed explanation on how to use the application.',
  },
  {
    question: 'How will you bill me?',
    answer: 'We bill based on a subscription plan. You can cancel your subscription at any time and receive a full refund.',
  },
];

const Compfaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 lg:pt-20">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full lg:text-center text-left bg-white text-black border border-custom-blue px-4 py-2 rounded-sm focus:text-white focus:bg-custom-blue focus:border focus:border-blue-600"
          >
            {faq.question}
            <span className="float-right">{openIndex === index ? '▲' : '▼'}</span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className="p-4 rounded-b-lg bg-white text-black"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Compfaq;
