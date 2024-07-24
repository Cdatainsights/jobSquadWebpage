import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../../public/img/home/front.jpg";

export const Hero = () => {
  return (
    <>
      <Container  className="flex flex-wrap ">
        <div id="about" className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 pr-0 p-10 sm:pr-10">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Find your dream
              job with just one
              click!
            </h1>
            <p className="py-7 text-sm     leading-normal text-gray-500 lg:text-lg">
              Effortlessly Apply for Your Dream Job on LinkedIn with JOBSquad.
              Automate Your Job Applications and Land Opportunities Faster.
              Take the next step in your career journey by installing JOBSquad today!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://chrome.google.com/webstore/detail/ebopaciecnbemabeiammegechkhpbfmc"
                target="_blank"
                rel="noopener"
                className="block w-full md:w-auto px-4 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-center text-white bg-[#3975EA] rounded-md mt-4 md:mt-0">
                Get our extensions
              </a>
              <a
                href="/about"
                target="_blank"
                rel="noopener"
                className="block w-full md:w-auto px-4 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-center text-white bg-[#CCE1FF] rounded-md mt-4 md:mt-0">
                <span className="text-[#3975EA]"> Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 p-10">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
              
              style={{ borderRadius: "40px" }}
            />
          </div>
        </div>
      </Container>

    </>
  );
}


