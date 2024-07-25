import React from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import btik from "/public/img/home/btik.svg";
import gtik from "/public/img/home/gtik.svg";

const pricingData = [
    {
        title: "Free",
        price: "0/mo",
        features: [
            "Apply once per day",
            "One Job Profile",
            "Access first job page"
        ],
        icon: btik,
    },
    {
        title: "Monthly",
        price: "10/mo",
        features: [
            "Unlimited applications",
            "Unlimited Job Profiles",
            "Access all LinkedIn job pages"
        ],
        // recommended: true,
        icon: gtik,
    },
    {
        title: "Yearly",
        price: "99/yr",
        features: [
            "Unlimited applications",
            "Unlimited Job Profiles",
            "Access all LinkedIn job pages"
        ],
        recommended: true,
        icon: gtik,
    }

];

const PricingTable = () => {
    return (
        <Container>
            <p id="pricing" className="text-3xl md:text-3xl lg:text-4xl lg:mr-10 font-bold text-center mt-10 mb-10">
                Pricing
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:px-9 pt-10 pb-10 lg:px-0">
                {pricingData.map((plan, index) => (
                    <div key={index} className="pricegrid">
                        {plan.recommended && (
                            <div className="recommended bg-[#3975EA] text-white text-center py-2 px-4 rounded-t-3xl">
                                <span className="text-s">Recommended</span>
                            </div>
                        )}
                        <div className="head py-4 text-center transition-all duration-500">
                            <h4 className="title text-2xl md:text-4xl lg:text-xl font-bold text-[#3975EA]">
                                {plan.title}
                            </h4>
                        </div>
                        <div className="content py-4">
                            <div className="price text-2xl lg:text-3xl mx-auto flex items-center justify-center text-[#3975EA] font-bold border-[#3975EA] mb-6">
                                <h1>${plan.price}</h1>
                            </div>
                            <ul className="lg:text-start  pr-10 pl-10 lg:pl-20 text-[#3975EA]">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="py-2 flex items-center">
                                        <Image src={plan.icon} alt="icon" width={20} height={20} className="mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="sign-up text-center mt-6">
                                <a
                                    href="#"
                                    className="btn bordered radius bg-[#3975EA] text-white py-3 px-8 inline-block transition-all duration-300 hover:shadow-lg rounded-[15px]"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default PricingTable;
