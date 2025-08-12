"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiMap } from "react-icons/bi";
import Card from "@/components/Card";

export function Event34() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Schedule</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Events
            </h1>
            <p className="md:text-md">
              Join us for an exciting year of growth, community engagement, and
              unforgettable experiences!
            </p>
          </div>
        </div>
        <Tabs defaultValue="fri-09-feb" className="flex flex-col justify-start">
          <TabsList className="mb-12 ml-[-5vw] flex no-scrollbar w-screen items-center overflow-auto pl-[5vw] md:ml-0 md:w-full md:overflow-hidden md:pl-0">
            <TabsTrigger
              value="fri-09-feb"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
            >
              Fri 09 Feb
            </TabsTrigger>
            <TabsTrigger
              value="sat-10-feb"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
            >
              Sat 10 Feb
            </TabsTrigger>
            <TabsTrigger
              value="sun-11-feb"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
            >
              Sun 11 Feb
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="fri-09-feb"
            className="data-[state=active]:animate-tabs"
          >
            <div className="flex flex-col gap-y-6 md:gap-y-8">
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-md md:text-lg">8:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-xl font-bold md:text-2xl">
                      Coaching Program Launch
                    </h5>
                    <div>Coach</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BiMap className="size-6 flex-none" />
                    <span>TTC</span>
                  </div>
                </div>
                <Button variant="secondary" size="primary" title="View details">
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-md md:text-lg">9:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-xl font-bold md:text-2xl">
                      Player Registration
                    </h5>
                    <div>Admin</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BiMap className="size-6 flex-none" />
                    <span>TTC</span>
                  </div>
                </div>
                <Button variant="secondary" size="primary" title="View details">
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-md md:text-lg">10:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-xl font-bold md:text-2xl">
                      Team Building Hike
                    </h5>
                    <div>Guide</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BiMap className="size-6 flex-none" />
                    <span>Kilimambogo</span>
                  </div>
                </div>
                <Button variant="secondary" size="primary" title="View details">
                  <a href="#">View details</a>
                </Button>
              </Card>
            </div>
          </TabsContent>
          <TabsContent
            value="sat-10-feb"
            className="data-[state=active]:animate-tabs"
          >
            <div className="flex flex-col gap-y-6 md:gap-y-8">
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-md md:text-lg">8:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-xl font-bold md:text-2xl">
                      Friendly Match
                    </h5>
                    <div>Coach</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BiMap className="size-6 flex-none" />
                    <span>TTC</span>
                  </div>
                </div>
                <Button variant="secondary" size="primary" title="View details">
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-md md:text-lg">9:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-xl font-bold md:text-2xl">
                      Wellness Session
                    </h5>
                    <div>Speaker</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BiMap className="size-6 flex-none" />
                    <span>TBD</span>
                  </div>
                </div>
                <Button variant="secondary" size="primary" title="View details">
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-md md:text-lg">10:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-xl font-bold md:text-2xl">
                      Community Clean-Up
                    </h5>
                    <div>Leader</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BiMap className="size-6 flex-none" />
                    <span>Kikuyu</span>
                  </div>
                </div>
                <Button variant="secondary" size="primary" title="View details">
                  <a href="#">View details</a>
                </Button>
              </Card>
            </div>
          </TabsContent>
          <TabsContent
            value="sun-11-feb"
            className="data-[state=active]:animate-tabs"
          >
            <div className="flex flex-col gap-y-6 md:gap-y-8">
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-md md:text-lg">8:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-xl font-bold md:text-2xl">
                      Tree Planting Day
                    </h5>
                    <div>Facilitator</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BiMap className="size-6 flex-none" />
                    <span>Thogoto</span>
                  </div>
                </div>
                <Button variant="secondary" size="primary" title="View details">
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-md md:text-lg">9:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-xl font-bold md:text-2xl">
                      Awards Ceremony
                    </h5>
                    <div>Admin</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BiMap className="size-6 flex-none" />
                    <span>Kikuyu</span>
                  </div>
                </div>
                <Button variant="secondary" size="primary" title="View details">
                  <a href="#">View details</a>
                </Button>
              </Card>
              <Card className="grid grid-cols-1 items-center gap-8 p-6 sm:gap-4 md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:p-8">
                <div className="text-md md:text-lg">10:00 am</div>
                <div className="w-full md:w-36">
                  <a
                    href="#"
                    className="relative block aspect-[3/2] md:aspect-square"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                      className="absolute size-full rounded-image object-cover"
                    />
                  </a>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                  <div>
                    <h5 className="text-xl font-bold md:text-2xl">
                      Cancer Awareness Event
                    </h5>
                    <div>Speaker</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BiMap className="size-6 flex-none" />
                    <span>TTC</span>
                  </div>
                </div>
                <Button variant="secondary" size="primary" title="View details">
                  <a href="#">View details</a>
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
