"use client";

import { ButtonLink } from "../../../components/ButtonLink";

export function Layout22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              Our Journey &amp; Commitment To Sports
            </h2>
            <p className="md:text-md">
              At 365Events, we believe in fostering a community where faith and
              sports intersect. Our core values of discipline, teamwork, and
              integrity guide us in making a positive impact on athletes and
              their families.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <ButtonLink to="/contact" variant="chevron">
                Contact
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
