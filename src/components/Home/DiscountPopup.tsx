import React, { MouseEvent } from "react";

interface DiscountPopupProps {
  onClose: () => void;
}

export const DiscountPopup: React.FC<DiscountPopupProps> = ({ onClose }) => {
  // Handle click outside the modal
  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-2xl mx-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Special Launch Offer!
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Use the code{" "}
          <span className="font-bold text-red-600">LAUNCH2024</span> at checkout
          to get for <b>$0.99!</b>
        </p>
        <a
          href="https://www.app.jobsquad.info/payment"
          className="text-blue-600 underline text-lg hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proceed to checkout
        </a>
        <div className="mt-8">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};