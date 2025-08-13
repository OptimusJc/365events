"use client";

import { TbTournament } from "react-icons/tb";
import { MdAllInclusive, MdOutlineSports } from "react-icons/md";
import { ButtonLink } from "../../../components/ButtonLink";

export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-2xl text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Events</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Exciting Sports Events for Everyone
            </h2>
            <p className="md:text-md">
              At 365Events, we organize a variety of sports events that foster
              community spirit and athletic excellence. Join us for tournaments,
              matches, and community sports days that celebrate teamwork and
              faith.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <TbTournament className="h-12 w-12" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Tournaments and Competitive Matches
              </h3>
              <p>
                Participate in thrilling tournaments that challenge your skills.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <MdOutlineSports className="h-12 w-12" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Community Sports Days for All Ages
              </h3>
              <p>Join us for fun-filled community sports days.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <MdAllInclusive className="h-12 w-12" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Inclusive Matches for All Skill Levels
              </h3>
              <p>Our matches are designed to welcome everyone.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <ButtonLink to="/about" variant="secondary">
              Lean More
            </ButtonLink>
            <ButtonLink to="/contact" variant="chevron">
              Sign Up
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
