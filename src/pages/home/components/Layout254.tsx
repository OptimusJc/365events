"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export function Layout254() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Join</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Become Part of Our Community Today
            </h2>
            <p className="md:text-md">
              At 365Events, we welcome everyone to experience the joy of sports
              through faith. Our programs are designed to foster growth in
              skills, character, and spirituality.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                How to Get Started
              </h3>
              <p>
                Sign up online and choose your desired program to begin your
                journey with us.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Participate in Activities
              </h3>
              <p>
                Engage in training sessions and events that emphasize teamwork
                and spiritual growth.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image"
              className="h-auto w-full rounded-image object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Experience Community Support
              </h3>
              <p>
                Join a community that shares your values and passion for sports
                and faith.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Grow in Faith
              </h3>
              <p>
                Develop your skills while nurturing your spiritual journey
                through our faith-based programs.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Link to="/about">
            <Button
              variant="secondary"
              className="cursor-pointer border-2 border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 hover:border-gray-400 hover:text-black transition-colors"
            >
              Learn More
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              iconRight={<RxChevronRight />}
              variant="link"
              size="link"
              className="flex items-center gap-2 cursor-pointer text-gray-700 hover:bg-gray-100 hover:border-gray-400 hover:text-black transition-colors"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
