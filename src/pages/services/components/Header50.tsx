"use client";

import { ButtonLink } from "../../../components/ButtonLink";

export function Header50() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4">
            Empower
          </p>
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            Our Core Services
          </h1>
          <p className="text-text-alternative md:text-md">
            Experience sports management, marketing, coaching, and events rooted
            in faith and integrity.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <ButtonLink to="/about" variant="secondary">
              Learn More
            </ButtonLink>
            <ButtonLink to="/contact" variant="tertiary">
              Sign Up
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
