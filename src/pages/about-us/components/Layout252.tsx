"use client";

import { ButtonLink } from "../../../components/ButtonLink";

export function Layout252() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container lg:mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Our Core Values: The Foundation of 365Events' Mission and Vision
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              At 365Events, our core values guide every decision and action we
              take. We believe in professionalism, community empowerment,
              integrity, and innovation as the pillars of our organization.
              These values not only shape our operations but also inspire the
              young athletes we serve.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Professionalism: Setting Standards in Sports Management and
              Manufacturing
            </h3>
            <p>We uphold the highest standards in every aspect of our work.</p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <ButtonLink to="/contact" variant="chevron">
                Learn More
              </ButtonLink>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Community Empowerment: Building Stronger Futures Through Sports
              and Engagement
            </h3>
            <p>
              We strive to uplift our community by fostering talent and
              opportunities.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <ButtonLink to="/contact" variant="chevron">
                Sign Up
              </ButtonLink>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Integrity: Trust and Honesty in Every Interaction and Partnership
            </h3>
            <p>
              We believe in transparency and accountability in all our
              endeavors.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <ButtonLink to="/contact" variant="chevron">
                Contact
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
