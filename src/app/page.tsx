
import { Container } from "@/components/Container";
import { Hero } from "@/components/Home/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import Code from "@/components/Home/Code";


import Testimonials from "@/components/Home/Testimonials";
import { Middlesection } from "@/components/Home/Middlesection";
import { Cta } from "@/components/Home/Cta";
import { Demo }   from '@/components/Home/Demo';
import Pricingtable from "@/components/Home/Pricing";
import Head from 'next/head';



export default function Home() {
  return (
    <Container>
      <Head>
                <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero />
      <div className="border border-gray-300 border-opacity-50 w-4/5 mx-auto"></div>
      <SectionTitle
        title=" Automate your job application process"
      >
        <div className="pt-2 text-black">
          Focus on what matters most – your skills and experience. Let Job Squad handle
          the repetitive task of filling out application forms, so you can concentrate on
          advancing your career.
        </div>
      </SectionTitle>
  

      <Demo />
      <Middlesection />
      <Pricingtable />
      <Code/>
      <SectionTitle
        title="Don’t just take our word for it!"
      > 
      </SectionTitle>
      <Testimonials />
      <Cta />
    </Container>
  );
}
