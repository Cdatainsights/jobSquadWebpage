"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

export const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact Us", href: "/#contact" },
    { name: "FAQs", href: "/#faqs" },
  ];

  return (
    <div className="flex flex-row item-center bg-[#e8f6ff] justify-center w-full p-0 m-0 ">
      <footer>
        <div className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Top area: Blocks */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

              {/* 1st block */}
              <div className="md:col-span-4 lg:col-span-5">
                <div className="mb-2 ">
                  {/* Logo */}
                  <Link href="/" className=" flex flex-row lg:flex-col inline-block  lg:item-left justify-center lg;justify-left item-center" aria-label="jobsquad">
                    <Image src={logo} alt="Footerlogo" />
                  </Link>
                </div>
                <div className=" text-center lg:text-left text-gray-600">Jobsquad is a cutting-edge Chrome extension designed to streamline
                  your job search on LinkedIn. Our team consists of passionate
                  professionals from various industries who have experienced the job hunt
                  firsthand. We are dedicated to making the job application process as
                  smooth and stress-free as possible for job seekers everywhere.</div>
              </div>

              {/* 2nd, 3rd and 4th blocks */}
              <div className="md:col-span-8 lg:col-span-7 grid align-middle sm:grid-cols-2 gap-8">
                {/* 2nd block */}
                <div className="text-base text-center sm:text-left">
                  <ul className="pl-5 lg:p-0">
                    <br />
                    <br/>
                    
                    <li className="mb-1">
                      <Link href="/about" className="text-gray-600 hover:text-gray-400 transition duration-150 ease-in-out">About us</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/#pricing" className="text-gray-600 hover:text-gray-400 transition duration-150 ease-in-out">Pricing</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/contact" className="text-gray-600 hover:text-gray-400 transition duration-150 ease-in-out">Contact us</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/faq" className="text-gray-600 hover:text-gray-400 transition duration-150 ease-in-out">FAQs</Link>
                    </li>
                  </ul>
                </div>

                {/* 3rd block */}
                <div className="text-base text-center align-middle sm:text-left">
                  
                  <br />
                  <br/>
                  <ul className="pl-5 lg:p-0">
                    <li className="mb-1">
                      <Link href="../pdf/tnc.pdf" target="_blank" className="text-gray-600 hover:text-gray-400 transition duration-150 ease-in-out">Terms & Conditions</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="../pdf/privacy.pdf" target="_blank" className="text-gray-600 hover:text-gray-400 transition duration-150 ease-in-out">Privacy Policy</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="../pdf/refunds.pdf" target="_blank" className="text-gray-600 hover:text-gray-400 transition duration-150 ease-in-out">Refunds </Link>
                    </li>
                    
                  </ul>
                </div>

                {/* 4th block */}
                
              </div>


            </div>

            {/* Bottom area */}
            <div className="md:flex items-center md:items-center md:justify-between">

              {/* Social links */}
              <ul className="flex mb-4 justify-center md:order-1 md:ml-4 md:mb-0">
                <li>
                  <Link href="https://www.x.com" target="_blank" className="flex justify-center items-center text-purple-600 bg-custom-blue hover:text-gray-100 hover:bg-custom-blue2 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                    <svg className="w-8 h-8 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </Link>
                </li>
                
                
                <li className="ml-4">
                  <Link href="https://www.instgram.com" target="_blank" className="flex justify-center items-center text-purple-600 bg-custom-blue hover:text-gray-100 hover:bg-custom-blue2 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                    <svg className="w-8 h-8 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20.145" cy="11.892" r="1" />
                      <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                      <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                    </svg>
                  </Link>
                </li>
                
              </ul>

              {/* Copyrights note */}
              <div className="text-gray-600 text-sm text-center lg:mr-4">&copy; Jobsquad.com. All rights reserved.</div>

            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};
