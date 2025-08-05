"use client";

import { ButtonLink } from "../../../components/ButtonLink";

export function Header9() {
  return (
    <section
      id="relume"
      className="flex h-dvh min-h-svh flex-col bg-orange-100"
    >
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
      <div className="px-[5%] lg:mx-auto">
        <div className="relative z-10 container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="text-5xl font-bold text-text-primary md:text-9xl lg:text-6xl">
                Empowering Sports For A Brigher Future
              </h1>
            </div>
            <div>
              <p className="text-base text-text-primary md:text-md">
                At 365Events, we are dedicated to nurturing young athletes and
                fostering community growth through sports. Join us in our
                mission to develop talent and build futures.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <ButtonLink to="/contact" variant="primary">
                  Join
                </ButtonLink>
                <ButtonLink to="/about" variant="secondary">
                  Learn More
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
