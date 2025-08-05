"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { ButtonLink } from "../../../components/ButtonLink";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20 lg:mx-auto">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about our mission and services below.
          </p>
          <div className="mt-6 md:mt-8">
            <ButtonLink to="/contact" variant="tertiary">
              Contact Us
            </ButtonLink>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is 365Events?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              365Events is a Christian-based sports organization dedicated to
              fostering athletic skills and spiritual growth. We provide sports
              management, marketing, coaching, and events that emphasize
              teamwork and integrity. Our mission is to inspire athletes through
              faith-driven mentorship.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How can I join?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Joining 365Events is easy! You can sign up for our programs
              directly on our website. We welcome athletes of all ages and skill
              levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What programs do you offer?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer a variety of programs including sports management,
              coaching, and our signature 365 Soccer Program. Each program is
              designed to integrate athletic training with Christian values. Our
              goal is to develop both skills and character.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Are there age limits?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              No, we cater to athletes of all ages! Our programs are tailored to
              meet the needs of children, teens, and adults. We believe everyone
              can benefit from sports and spiritual growth.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do you ensure safety?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Safety is our top priority. We implement strict safety protocols
              and guidelines for all our events and programs. Our trained staff
              is committed to providing a secure environment for all
              participants.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
