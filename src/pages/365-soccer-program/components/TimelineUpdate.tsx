"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

export function TimelineUpdate() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          <div className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4">
            <p className="mb-3 font-semibold md:mb-4">Updates</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Upcoming League Engagements and Goals
            </h1>
            <p className="md:text-md">
              We are excited to announce our plans for the U23 Girls team. Our
              goal is to join the FKF regional league by 2025.
            </p>
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
                  2025
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  U23 Girls League
                </h3>
                <p>
                  We are committed to developing our U23 Girls team for
                  competitive play. This initiative aims to foster talent and
                  teamwork.
                </p>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                  2025
                </h2>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Elite Kids League
                </h3>
                <p>
                  We aim to engage the Under 11 and Under 13 categories in an
                  FKF elite kids league. This will enhance their skills and
                  competitive spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
