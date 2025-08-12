"use client";

import { IoFootballOutline } from "react-icons/io5";
import { MdOutlineHighQuality } from "react-icons/md";
import { MdOutlineSports } from "react-icons/md";
import { ButtonLink } from "../../../components/ButtonLink";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="max-w-4xl">
            <p className="mb-3 font-semibold md:mb-4">Precision</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              Our Vision: Elevating Kenyan Football Through Quality and Local
              Talent
            </h1>
            <p className="text-medium mb-5 md:mb-6">
              At 365Events, we envision a future where Kenyan football thrives
              on a foundation of excellence and local talent. Our commitment to
              nurturing athletes ensures sustainable growth in sports across the
              nation.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <IoFootballOutline className="w-6 h-6" />
                </div>
                <span>
                  Empowering local talent for a brighter sporting future.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <MdOutlineHighQuality className="w-6 h-6" />
                </div>
                <span>Focusing on quality to elevate sports standards.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <MdOutlineSports className="w-6 h-6" />
                </div>
                <span>Building a legacy of excellence in Kenyan sports.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <ButtonLink to="/contact" variant="chevron">
                Get Started
              </ButtonLink>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
