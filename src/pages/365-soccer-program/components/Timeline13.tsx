"use client";

import { Button } from "@relume_io/relume-ui";
import { useScroll, useTransform, motion } from "framer-motion";
import { Fragment, useRef } from "react";
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
    <motion.div
      ref={circleRef}
      style={backgroundColor}
      className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white] md:mt-8"
    />
  );
};

export function Timeline13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="relative z-10 w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Schedule</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Training and Events Overview
              </h2>
              <p className="md:text-md">
                Our training schedule is designed to accommodate all ages,
                ensuring consistent development. Join us for exciting
                tournaments and events throughout the year!
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button
                  title="Learn More"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-1 justify-items-center gap-20">
            <div className="absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-auto">
              <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
              <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />
              <div className="h-full w-[3px] bg-neutral-lighter" />
              <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
              <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="col-span-1 row-span-2 flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-8 md:gap-12">
                  <div>
                    <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                      April
                    </h3>
                    <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                      Kids Soccer Tournament
                    </h4>
                    <p>
                      Our annual Kids Soccer Tournament takes place every April,
                      welcoming U11 to U15 players. This event has been a
                      highlight since 2021, fostering teamwork and
                      sportsmanship.
                    </p>
                  </div>
                </div>
              </Fragment>
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="mt-4 grid grid-cols-1 items-start gap-8 text-left md:items-end md:gap-12 md:text-right">
                  <div>
                    <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                      August
                    </h3>
                    <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                      Youth Tournament
                    </h4>
                    <p>
                      In August, we host a Youth Tournament for teams across
                      various age groups. This event promotes competitive play
                      and skill development for all participants.
                    </p>
                  </div>
                </div>
                <div className="order-first col-span-1 row-span-2 flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                    className="w-full rounded-image"
                  />
                </div>
              </Fragment>
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="col-span-1 row-span-2 flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-8 md:gap-12">
                  <div>
                    <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                      August
                    </h3>
                    <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                      Girls’ League
                    </h4>
                    <p>
                      Our August Girls' League features U11, U13, and U15
                      categories, encouraging female participation in soccer.
                      This league provides a supportive environment for young
                      girls to excel.
                    </p>
                  </div>
                </div>
              </Fragment>
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="mt-4 grid grid-cols-1 items-start gap-8 text-left md:items-end md:gap-12 md:text-right">
                  <div>
                    <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                      July
                    </h3>
                    <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                      Coach Development Program
                    </h4>
                    <p>
                      Our Coach Development Program runs every July-August, led
                      by certified USSF coaches. This seminar attracts over 50
                      coaches from across Kenya, focusing on youth development
                      and coaching excellence.
                    </p>
                  </div>
                </div>
                <div className="order-first col-span-1 row-span-2 flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                    className="w-full rounded-image"
                  />
                </div>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
