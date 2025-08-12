"use client";

import { ButtonLink } from "../../../components/ButtonLink";

export function Header47() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-orange-200"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-2xl">
            <p className="mb-3 font-semibold md:mb-4">Unity</p>
            <h1 className="text-6xl font-bold md:text-7xl lg:text-9xl">
              About 365events
            </h1>
          </div>
          <div className="w-full max-w-2xl">
            <p className="md:text-md">
              At 365Events, we believe in the transformative power of sports
              through faith. Our mission is to inspire athletes to grow in
              discipline, teamwork, and integrity while fostering spiritual
              growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <ButtonLink to="/contact" variant="secondary">
                Join Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
