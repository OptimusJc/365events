"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { IoBarChartSharp, IoFootball } from "react-icons/io5";
import { MdSports } from "react-icons/md";
import { Link } from "react-router-dom";

export function Layout245() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-center justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Empower</p>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-7xl">
                Transforming Local Sports Through Innovation and Passion
              </h2>
            </div>
            <div>
              <p className="md:text-md">
                At 365Events,we are dedicated to nurturing local talent and
                enhancing the sports landscape in Kenya. Our core
                services—Sports Management, Sports and Equipment Manufacturing,
                Sports Marketing, Talent Scouting, Coaching, and Events—are
                designed to nurture athletes both on and off the field. We
                believe in fostering a community where discipline, teamwork, and
                integrity thrive.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <IoFootball className="h-12 w-12" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Comprehensive Sports Management Tailored for You
              </h3>
              <p>
                Our Sports Management services ensure your athletic journey is
                guided by expertise and faith.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <IoBarChartSharp className="h-12 w-12" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Innovative Sports Marketing Strategies for Growth
              </h3>
              <p>
                We create marketing strategies that resonate with your values
                and engage your audience.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <MdSports className="h-12 w-12" />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Expert Coaching for All Skill Levels
              </h3>
              <p>
                Our coaching programs focus on skill development and spiritual
                growth.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
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
      </div>
    </section>
  );
}
