'use client';
import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

// Import your images
import userOneImg from "../../../public/img/home/user1.jpg";
import userTwoImg from "../../../public/img/home/user2.jpg";
import userThreeImg from "../../../public/img/home/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid1">
        {/* Testimonial 1 */}
        <div className="grid2">
          <div className="flex pt-10 justify-center mb-4">
            <Image src={userOneImg} alt="UserOne" className="rounded-full" width={80} height={80} />
          </div>
          <div className="p-6 text-gray-600 pb-10 relative z-10 text-center">
            <p className="text-lg mb-4">&quot; Since using this tool, I&apos;ve seen a significant increase in the number of interviews I&apos;m getting. It helps me cast a wider net and ensures I don&apos;t miss out on any good opportunities &quot;</p>
            <div className="border-b-2 border-gray-300 w-4/5 mb-2 mx-auto"></div>
            <p className="font-semibold text-gray-500">Emily Parker</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="grid2">
          <div className="flex pt-10 justify-center mb-4">
            <Image src={userTwoImg} alt="UserTwo" className="rounded-full" width={80} height={80} />
          </div>
          <div className="p-6 text-gray-600 pb-10 relative z-10 text-center">
            <p className="text-lg mb-4">&quot; This tool has been a game-changer in my job search. It&apos;s helped me save time, apply to more jobs, and ultimately land more interviews. I highly recommend it to anyone looking for a new position &quot;</p>
            <div className="border-b-2 border-gray-300 w-4/5 mb-2 mx-auto"></div>
            <p className="font-semibold text-gray-500">Marcus Johnson</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="grid2">
          <div className="flex pt-10 justify-center mb-4">
            <Image src={userThreeImg} alt="UserThree" className="rounded-full" width={80} height={80} />
          </div>
          <div className="p-6 text-gray-600 pb-10 relative z-10 text-center">
            <p className="text-lg mb-4">&quot; This tool is a lifesaver! It frees up so much time in my job search by automatically applying to jobs on LinkedIn. I can now focus on tailoring my cover letters and preparing for interviews &quot;</p>
            <div className="border-b-2 border-gray-300 w-4/5 mb-2 mx-auto"></div>
            <p className="font-semibold text-gray-500">Daniel Miller</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
