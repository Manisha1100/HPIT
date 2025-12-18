import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

import ServiceCard from "../common/ServiceCard";

import card1 from "../../assets/img/card1.jpg";
import card2 from "../../assets/img/card2.jpg";
import card3 from "../../assets/img/card3.jpg";
import card4 from "../../assets/img/card4.jpg";
import card5 from "../../assets/img/card5.jpg";

const servicesData = [
  {
    heading: "Artificial Intelligence",
    description: "Find your dream property with our expert local guidance.",
    isRight: false,
    bg: card1,
  },
  {
    heading: "Cloud",
    description:
      "A cloud is a visible mass of tiny water droplets or ice crystals suspended in the Earth’s atmosphere.",
    isRight: true,
    bg: card2,
  },
  {
    heading: "Cyber",
    description:
      "The word cyber relates to computers, digital technology, networks, and virtual systems.",
    isRight: false,
    bg: card3,
  },
  {
    heading: "Quantum",
    description:
      "The word quantum comes from physics and refers to the smallest possible unit of energy or matter.",
    isRight: true,
    bg: card4,
  },
  {
    heading: "5G Technology",
    description:
      "5G technology is the latest standard for mobile networks, designed to deliver ultra-fast internet speeds and massive device connectivity.",
    isRight: false,
    bg: card5,
  },
];
const Services = () => {
  return (
    <section className="w-full flex flex-col items-center">
  
      <div className="w-full h-[300px] flex items-center justify-center flex-col gap-6 bg-black">
        <h1 className="text-4xl font-bold bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-center text-white">
          These case studies highlight the challenges our clients faced,the tailored solutions we provided, and the measurable results achieved.
        </p>
      </div>

      <div className="w-full h-[400px]">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={0}
          speed={1000}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          modules={[Mousewheel]}
          className="h-full"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index} className="h-full">
              <ServiceCard props={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
