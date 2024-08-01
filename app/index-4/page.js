import Brands1 from "@/components/sections/homepage1/Brands1";
import News2 from "@/components/sections/homepage2/News2";
import Newsletter1 from "@/components/sections/homepage2/Newsletter1";
import Pricing2 from "@/components/sections/homepage2/Pricing2";
import Requestquote2 from "@/components/sections/homepage2/Requestquote2";
import Info6 from "@/components/sections/homepage3/Info6";
import Hero4 from "@/components/sections/homepage4/Hero4";
import Howitwork2 from "@/components/sections/homepage4/Howitwork2";
import Info7 from "@/components/sections/homepage4/Info7";
import Projects3 from "@/components/sections/homepage4/Projects3";
import Testimonial4 from "@/components/sections/homepage4/Testimonial4";
import Whychooseus3 from "@/components/sections/homepage4/Whychooseus3";

export default function Home4() {
  return (
    <>
      <Hero4 />
      <Info7 />
      <Testimonial4 />
      <Howitwork2 />
      <Projects3 />
      <Info6 />
      <div className="line-border mb-30 mt-70"></div>
      <Requestquote2 />
      <Whychooseus3 />
      <Brands1 />
      <Pricing2 />
      <News2 />
      <Newsletter1 />
    </>
  );
}
