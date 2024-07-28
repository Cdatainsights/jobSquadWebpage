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
            <p className="text-lg mb-4">&quot;Thanks to this tool, I&apos;ve landed multiple interviews within just a few weeks. It&apos;s easy to use and has significantly improved my chances of finding the right job.&quot;</p>
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
            <p className="text-lg mb-4">&quot;Using this tool has transformed my job search. I&apos;ve gone from sending out a few applications a week to dozens. The automated process is seamless and incredibly efficient.&quot;</p>
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
            <p className="text-lg mb-4">&quot;This job auto-applier has made my job hunt so much easier. It applies to relevant jobs quickly and efficiently, giving me more time to prepare for the interviews.&quot;</p>
            <div className="border-b-2 border-gray-300 w-4/5 mb-2 mx-auto"></div>
            <p className="font-semibold text-gray-500">Daniel Miller</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
