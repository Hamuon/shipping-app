"use client";
import Bgmap from "@/components/sections/homepage1/Bgmap";
import Brands1 from "@/components/sections/homepage1/Brands1";
import Cta1 from "@/components/sections/homepage1/Cta1";
import Faqs1 from "@/components/sections/homepage1/Faqs1";
import Hero1 from "@/components/sections/homepage1/Hero1";
import Howitwork1 from "@/components/sections/homepage1/Howitwork1";
import Info1 from "@/components/sections/homepage1/Info1";
import Info2 from "@/components/sections/homepage1/Info2";
import News1 from "@/components/sections/homepage1/News1";
import Pricing1 from "@/components/sections/homepage1/Pricing1";
import Projects1 from "@/components/sections/homepage1/Projects1";
import Requestquote1 from "@/components/sections/homepage1/Requestquote1";
import Services1 from "@/components/sections/homepage1/Services1";
import Testimonial1 from "@/components/sections/homepage1/Testimonial1";
export default function Home() {
  return (
    <>
      <Hero1 />
      <Brands1 />
      <Services1 />
      <Info1 />
      <Info2 />
      <Howitwork1 />
      <Testimonial1 />
      <Projects1 />
      <Requestquote1 />
      <Pricing1 />
      <Faqs1 />
      <Cta1 />
      <News1 />
      <Bgmap />
    </>
  );
}
