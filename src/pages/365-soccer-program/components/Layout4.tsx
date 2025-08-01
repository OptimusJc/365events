"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Choose</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Why Parents Trust 365 Soccer Program
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              At 365 Soccer Program, we prioritize your child's holistic
              development. Our faith-based mentorship and structured training
              ensure they thrive both on and off the field.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Faith-Based
                </h6>
                <p>
                  We integrate spiritual values into every training session for
                  character growth.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Affordable Training
                </h6>
                <p>
                  Our programs are designed to be accessible for all families.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Sign Up
              </Button>
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
