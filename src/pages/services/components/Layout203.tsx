"use client";

import { IoMdCalendar } from "react-icons/io";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";

export function Layout203() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Comprehensive Sports Management Services for Your Team and Events
            </h3>
            <p className="mb-6 md:mb-8 md:text-md">
              At 365Events, we specialize in sports management that elevates
              your team's performance. Our services include expert event
              coordination, team management, and logistical support tailored to
              your needs.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <IoMdCalendar className="h-12 w-12" />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Event Coordination
                </h6>
                <p>
                  We ensure every event runs smoothly, allowing you to focus on
                  the game.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <PiMicrosoftTeamsLogo className="h-12 w-12" />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Team Management
                </h6>
                <p>
                  Our team management services foster discipline and teamwork,
                  essential for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
