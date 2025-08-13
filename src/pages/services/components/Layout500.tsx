"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { ButtonLink } from "../../../components/ButtonLink";

export function Layout500() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-orange-50"
    >
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-2xl text-center md:mb-18 md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Empower</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Join Our Soccer Program Today
          </h1>
          <p className="md:text-md">
            The 365 Soccer Program is designed to nurture young athletes through
            skill development and teamwork. Our faith-based approach instills
            values of discipline and integrity in every player.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <ButtonLink to="/about" variant="tertiary">
              Learn More
            </ButtonLink>
            <ButtonLink to="/contact" variant="chevron">
              Sign Up
            </ButtonLink>
          </div>
        </div>
        <Tabs
          defaultValue="tab-one"
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
              className="rounded-image"
            />
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <Dialog>
              <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                  alt="Relume placeholder image 2"
                  className="size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-black/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 3"
              className="rounded-image"
            />
          </TabsContent>
          <TabsList className="grid grid-cols-1 items-center gap-x-4">
            <TabsTrigger
              value="tab-one"
              className="flex-col items-start border-0 border-l-2 border-transparent bg-transparent py-4 pr-0 pl-6 text-left whitespace-normal data-[state=active]:border-l-orange-500 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 md:pl-8"
            >
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Skill Development
              </h3>
              <p>
                Our program focuses on enhancing individual skills while
                promoting teamwork. Players will receive personalized coaching
                to help them reach their potential.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="flex-col items-start border-0 border-l-2 border-transparent bg-transparent py-4 pr-0 pl-6 text-left whitespace-normal data-[state=active]:border-l-orange-600 data-[state=active]:bg-transparent data-[state=active]:text-orange-600 md:pl-8"
            >
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Faith and Sports
              </h3>
              <p>
                We integrate Christian values into our training sessions. This
                fosters not only athletic growth but also spiritual development.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="flex-col items-start border-0 border-l-2 border-transparent bg-transparent py-4 pr-0 pl-6 text-left whitespace-normal data-[state=active]:border-l-orange-700 data-[state=active]:bg-transparent data-[state=active]:text-orange-700 md:pl-8"
            >
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Community Engagement
              </h3>
              <p>
                Join a community that shares your passion for sports and faith.
                Together, we build lasting friendships and support each other's
                growth.
              </p>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
