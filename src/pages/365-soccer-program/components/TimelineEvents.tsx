"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
      <motion.div
        ref={circleRef}
        style={backgroundColor}
        className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_#fff] md:mt-8"
      />
    </div>
  );
};

export function TimelineEvents() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          <div className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4">
            <p className="mb-3 font-semibold md:mb-4">Events</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Upcoming Events and Activities Overview
            </h1>
            <p className="md:text-md">
              Join us for exciting events that foster community and growth. Our
              programs are designed to engage participants of all ages.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Join"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Join
              </Button>
            </div>
          </div>
          <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />
            <div className="h-full w-[3px] bg-neutral-lighter" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
          </div>
          <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                  January
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Program Launch
                </h3>
                <p>
                  Kick off the year with our official coaching program opening.
                  It's a great opportunity for young athletes to get involved.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Register" variant="secondary">
                    Register
                  </Button>
                  <Button
                    title="Details"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                  February
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Team Building
                </h3>
                <p>
                  Join us for a hiking adventure at Kilimambogo. This event is
                  designed for kids, parents, and coaches to build camaraderie.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Participate" variant="secondary">
                    Participate
                  </Button>
                  <Button
                    title="Plan"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Plan
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                  March
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Organizing Trip
                </h3>
                <p>
                  Our committee is hard at work planning the December trip to
                  Arusha/Dubai. Stay tuned for more details!
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Inquire" variant="secondary">
                    Inquire
                  </Button>
                  <Button
                    title="Attend"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Attend
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                  April
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Kids Tournament
                </h3>
                <p>
                  Join us for the 365 Kids Soccer Tournament at TTC. It's a
                  fantastic opportunity for young players to showcase their
                  skills.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Compete" variant="secondary">
                    Compete
                  </Button>
                  <Button
                    title="Celebrate"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Celebrate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
