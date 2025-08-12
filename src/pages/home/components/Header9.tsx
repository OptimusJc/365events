"use client";

import { ButtonLink } from "../../../components/ButtonLink";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export function Header9() {
  return (
    <section
      id="relume"
      className="flex h-dvh min-h-svh flex-col bg-orange-100"
    >
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="size-full"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, el) => {
              return (
                <SwiperSlide
                  key={i}
                  className="text-center text-xl bg-gray-200"
                >
                  <div className="size-full object-cover flex items-center justify-center">
                    Image {el}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="px-[5%] mx-auto">
        <div className="relative z-10 container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="text-5xl font-bold text-text-primary md:text-6xl lg:text-7xl">
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
