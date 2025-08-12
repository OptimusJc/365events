"use client";

import fkf from "../../../assets/partners/FKF.png";
import isa from "../../../assets/partners/ISA.jpeg";
import ksl from "../../../assets/partners/KSL.jpeg";
import ksl_men from "../../../assets/partners/KSL_men.jpeg";
import ksl_female from "../../../assets/partners/KSL_female.jpeg";
import wazoefu from "../../../assets/partners/wazoefu_fc.jpg";

export function Logo2() {
  return (
    <section
      id="relume"
      className="px-[5%] py-12 md:py-16 lg:py-20 bg-orange-500"
    >
      <div className="container mx-auto grid grid-cols-1 items-start justify-start gap-x-12 gap-y-8 md:grid-cols-[max-content_1fr] md:items-center md:justify-between md:gap-y-4 lg:gap-x-16 lg:mx-auto">
        <h1 className="leading-[1.2] font-bold text-white md:max-w-[16rem] md:text-md md:leading-[1.2] lg:max-w-xxs">
          Trusted by top organizations in sports
        </h1>
        <div className="grid grid-cols-2 items-center justify-end gap-x-4 gap-y-4 pt-4 sm:grid-cols-3 md:gap-x-4 md:pt-0 lg:grid-cols-6">
          <div className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0">
            <img
              src={fkf}
              alt="Federation of Kenya Football"
              className="max-h-24 md:max-h-30"
            />
          </div>
          <div className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0">
            <img
              src={isa}
              alt="International Sports League"
              className="max-h-24 md:max-h-30"
            />
          </div>
          <div className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0">
            <img
              src={ksl}
              alt="Kikuyu Subcounty League"
              className="max-h-24 md:max-h-30"
            />
          </div>
          <div className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0">
            <img
              src={ksl_female}
              alt="Kikuyu Subcounty League Female"
              className="max-h-24 md:max-h-30"
            />
          </div>
          <div className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0">
            <img
              src={wazoefu}
              alt="Kikuyu Subcounty League Men"
              className="max-h-24 md:max-h-30"
            />
          </div>
          <div className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0">
            <img
              src={ksl_men}
              alt="Wazoefu FC"
              className="max-h-24 md:max-h-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
