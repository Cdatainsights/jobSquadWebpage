'use client';
import React from "react";
import Image from "next/image";

import link from "../../../public/img/home/link.png";
import select from "../../../public/img/home/select.svg";
import sapp from "../../../public/img/home/sapp.svg";
import capp from "../../../public/img/home/capp.svg";
import pin from "../../../public/img/home/pin.svg";
import puzzle from "../../../public/img/home/puzzle.svg";


import { Container } from "@/components/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCircle } from "react-icons/fa";
import { SectionTitle } from "../SectionTitle";

export const Demo = () => {
  return (
    <Container className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Watch the 5-step guide to land you deam job"
      >
      </SectionTitle>
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-2xl lg:m-20 lg:pb-20 pt-10 pb-10">
          <video width="1000" controls className="w-full h-auto">
            <source src="../img/home/expvid/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <VerticalTimeline layout="1-column" animate={false} lineColor="">
        {/* Experience 1 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            boxShadow: "none",
            textAlign: "left",
            padding: "0rem 1rem md:0rem 2rem",
          }}
          iconStyle={{
            background: "rgba(255, 255, 255, 1)",
            color: "rgb(57, 117, 234)",
            fontSize: "4rem",
          }}
          contentArrowStyle={{
            display: "none",
            color: "transparent",


          }}
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 mr-10 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold lg:text-xl capitalize">Add extension to chrome </h2>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>1.</b> Open the <a className="text-custom-blue   " href="https://chrome.google.com/webstore/detail/ebopaciecnbemabeiammegechkhpbfmc">JOBSquad Extension page.<Image alt="link" src={link} width={20} height={20} className="ml-2 hidden md:inline" /> </a>
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>2.</b> Click on <b>Add to Chrome.</b>
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>3.</b> A pop-up will appear. Click on <b>Add extension.</b>
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/home/expvid/atc.gif" // Example path to GIF
                alt="GIF"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 2 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            boxShadow: "none",
            textAlign: "left",
            padding: "0rem 1rem md:0rem 2rem",
          }}
          iconStyle={{
            background: "rgba(255, 255, 255, 1)",
            color: "rgb(57, 117, 234)",
            fontSize: "4rem",
          }}
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 mr-10 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold lg:text-xl capitalize">Pin the extension</h2>
              <p className="!mt-1 !font-normal text-gray-700">
                <b>1.</b>On the top right corner of the browser click on extensions.
                <Image alt="link" src={puzzle} width={15} height={15} className="ml-2 hidden md:inline" />

              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>2.</b>  Pin JOBSquad extension to the top by clicking on pin.
                <Image alt="link" src={pin} width={15} height={15} className="ml-2 hidden md:inline" />
              </p>
            </div>




            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/home/expvid/pe.gif" // Example path to GIF
                alt="GIF"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 3 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            boxShadow: "none",
            textAlign: "left",
            padding: "0rem 1rem md:0rem 2rem",
          }}
          iconStyle={{
            background: "rgba(255, 255, 255, 1)",
            color: "rgb(57, 117, 234)",
            fontSize: "4rem",
          }}
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 mr-10 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold lg:text-xl capitalize">Sign in with LinkedIn</h2>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>1.</b> On the top right corner of the browser click on extensions.
                <Image alt="link" src={puzzle} width={15} height={15} className="ml-2 hidden md:inline" />

              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>2.</b> Click on the Job Squad Extension
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>3.</b> Click on Open Dashboard.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>4.</b> Click on Login with LinkedIn.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/home/expvid/l.gif" // Example path to GIF
                alt="GIF"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 4 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            boxShadow: "none",
            textAlign: "left",
            padding: "0rem 1rem md:0rem 2rem",
          }}
          iconStyle={{
            background: "rgba(255, 255, 255, 1)",
            color: "rgb(57, 117, 234)",
            fontSize: "4rem",
          }}
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 mr-10 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold lg:text-xl capitalize">Create your Application</h2>
              <p className="!mt-1 !font-normal text-gray-700 ">

                <b>1.</b> Start your Job Application Process by clicking on <p className="ml-2 inline text-extrabold md:hidden">CREATE APPLICATION </p><Image alt="link" src={capp} width={150} height={20} className="ml-2 hidden md:inline" /> on the menu on the left.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>2.</b> Fill the Job Application form, Upload your resume, and click on Submit button on the bottom.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>3.</b> Click on Close button.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/home/expvid/ca.gif" // Example path to GIF
                alt="GIF"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 5 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            boxShadow: "none",
            textAlign: "left",
            padding: "0rem 1rem md:0rem 2rem",
          }}
          iconStyle={{
            background: "rgba(255, 255, 255, 0.9)",
            color: "rgb(57, 117, 234)",
            fontSize: "4rem",
          }}
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 mr-10 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold lg:text-xl capitalize">Start Applying</h2>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>1.</b> On the Start Applying page click on <p className="ml-2 inline text-bold smd:hidden">SELECT </p>
                <Image alt="link" src={select} width={40} height={20} className="ml-2 hidden md:inline" />
                button under your card to select it.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>2.</b> Click Close to close the pop up after your card is selected.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                <b>3.</b> Start Applying by clicking on <Image alt="link" src={sapp} width={160} height={25} className="md:inline" />
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/home/expvid/sa.gif" // Example path to GIF
                alt="GIF"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Add more VerticalTimelineElements for additional experiences */}
      </VerticalTimeline>
    </Container>
  );
};
