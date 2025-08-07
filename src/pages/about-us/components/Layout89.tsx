"use client";

import React from "react";

export function Layout89() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-orange-200">
      <div className="container lg:mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl xg:text-8xl">
              Our Mission: Setting Standards in Sports Manufacturing and
              Management
            </h3>
          </div>
          <div className="lg:max-w-2xl">
            <p className="text-medium">
              At 365Events, we strive to be a benchmark in the sports industry.
              Our mission is to foster social and economic growth through
              innovative sports manufacturing and management practices. We are
              dedicated to uplifting local talent and creating opportunities for
              athletes to thrive.
            </p>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
