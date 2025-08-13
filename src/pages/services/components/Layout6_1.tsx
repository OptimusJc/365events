"use client";

export function Layout6_1() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-orange-50"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Empowering Athletes Through Faith-Based Coaching and Skill
              Development
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              At 365Events, our coaching services focus on enhancing athletic
              skills while instilling core values of discipline and teamwork. We
              believe in nurturing not just athletes, but well-rounded
              individuals through spiritual mentorship.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Skill Development
                </h6>
                <p>
                  Tailored coaching programs designed to elevate performance and
                  foster personal growth.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Spiritual Mentorship
                </h6>
                <p>
                  Guiding athletes to integrate faith and values into their
                  sports journey.
                </p>
              </div>
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
