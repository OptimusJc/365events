"use client";

import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "@/assets/365events_logo_transparent.png";
import { ButtonLink } from "./ButtonLink";

export function Footer12() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container lg:mx-auto">
        <div className="border-b border-border-primary">
          <div className="mb-12 grid grid-cols-1 gap-x-[8vw] gap-y-12 md:mb-18 md:gap-y-16 lg:mb-20 lg:grid-cols-[1fr_0.5fr] lg:gap-y-20">
            <div className="rb-6 max-w-4xl">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-7xl lg:text-9xl">
                Get in Touch with Us
              </h1>
              <p>
                We’re here to answer your questions and support your journey in
                sports and faith.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <ButtonLink to="/contact" variant="primary">
                  Sign Up
                </ButtonLink>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
              <ul>
                <li className="py-2 text-sm font-semibold">
                  <Link to="/">Home</Link>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <Link to="/services">Our Services</Link>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <Link to="/soccer">Soccer Program</Link>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <ul>
                <li className="py-2 text-sm font-semibold">
                  <Link to="#">Support Us</Link>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <Link to="#">Join Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="rb-6 col-span-1 flex flex-col items-start justify-between pb-6 sm:flex-row sm:items-center md:pb-8 lg:col-span-2">
            <a href="/">
              <img
                src={logo}
                alt="Logo image"
                className="mb-6 inline-block sm:mb-0 h-40 w-40"
              />
            </a>
            <div className="ml-3 flex">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                alt="Relume placeholder image"
                className="relative -ml-3 size-12 min-h-12 min-w-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                alt="Relume placeholder image"
                className="relative -ml-3 size-12 min-h-12 min-w-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                alt="Relume placeholder image"
                className="relative -ml-3 size-12 min-h-12 min-w-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                alt="Relume placeholder image"
                className="relative -ml-3 size-12 min-h-12 min-w-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                alt="Relume placeholder image"
                className="relative -ml-3 size-12 min-h-12 min-w-12 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p>{`© ${currentYear} 365events. All rights reserved.`}</p>
          <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
            <Link to="#">
              <BiLogoFacebookCircle className="size-6" />
            </Link>
            <Link to="#">
              <BiLogoInstagram className="size-6" />
            </Link>
            <Link to="#">
              <BiLogoYoutube className="size-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
