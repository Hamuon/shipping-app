import Brands1 from "@/components/sections/homepage1/Brands1";
import Hero2 from "@/components/sections/homepage2/Hero2";
import Info3 from "@/components/sections/homepage2/Info3";
import Info4 from "@/components/sections/homepage2/Info4";
import News2 from "@/components/sections/homepage2/News2";
import Newsletter1 from "@/components/sections/homepage2/Newsletter1";
import Pricing2 from "@/components/sections/homepage2/Pricing2";
import Requestquote2 from "@/components/sections/homepage2/Requestquote2";
import Team1 from "@/components/sections/homepage2/Team1";
import Testimonial2 from "@/components/sections/homepage2/Testimonial2";
import Whychooseus1 from "@/components/sections/homepage2/Whychooseus1";
export default function Home2() {
  return (
    <>
      <Hero2 />
      <Whychooseus1 />
      <Requestquote2 />
      <Info3 />
      <Pricing2 />
      <div className="line-border"></div>
      <Team1 />
      <Brands1 />
      <Testimonial2 />
      <Info4 />
      <News2 />
      <Newsletter1 />
    </>
  );
}
