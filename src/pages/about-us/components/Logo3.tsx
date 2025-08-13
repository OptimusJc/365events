"use client";

import fkf from "../../../assets/partners/FKF.png";
import isa from "../../../assets/partners/ISA.jpeg";
import ksl from "../../../assets/partners/KSL.jpeg";
import ksl_men from "../../../assets/partners/KSL_men.jpeg";
import ksl_female from "../../../assets/partners/KSL_female.jpeg";
import wazoefu from "../../../assets/partners/wazoefu_fc.jpg";

const logos = [
  {
    src: `${fkf}`,
    alt: "Federation of Kenya Football",
  },
  {
    src: `${isa}`,
    alt: "ISA",
  },
  {
    src: `${ksl}`,
    alt: "Kenya Sports League",
  },
  {
    src: `${ksl_men}`,
    alt: "KSL Men",
  },
  {
    src: `${ksl_female}`,
    alt: "KSL Female",
  },
  {
    src: `${wazoefu}`,
    alt: "Wazoefu",
  },
];

export function Logo3() {
  return (
    <>
      <style>
        {`
          @keyframes loop-horizontally {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-loop-horizontally {
            animation: loop-horizontally 20s linear infinite;
          }
          /* Pause animation on hover */
          .logo-container:hover .animate-loop-horizontally {
            animation-play-state: paused;
          }
        `}
      </style>

      <section
        id="relume"
        className="overflow-hidden py-12 md:py-16 lg:py-20 bg-gray-100"
      >
        <div className="container mx-auto mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
          <h1 className="text-center text-base leading-[1.2] font-bold md:text-lg md:leading-[1.2]">
            Trusted by top organizations and community partners
          </h1>
        </div>
        <div className="flex items-center pt-7 md:pt-0">
          <div className="flex items-center pt-7 md:pt-0 logo-container">
            <div className="flex shrink-0 animate-loop-horizontally items-center">
              {logos.map((logo, index) => (
                <img
                  key={`first-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="mx-7 max-h-14 shrink-0 md:mx-10 md:max-h-18 lg:max-h-20 xl:max-h-28"
                />
              ))}
            </div>
            <div className="flex shrink-0 animate-loop-horizontally items-center">
              {logos.map((logo, index) => (
                <img
                  key={`first-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="mx-7 max-h-14 shrink-0 md:mx-10 md:max-h-18 lg:max-h-20 xl:max-h-28"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
