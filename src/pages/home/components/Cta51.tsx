"use client";

import Card from "../../../components/Card";
import { ButtonLink } from "../../../components/ButtonLink";

export function Cta51() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-orange-50"
    >
      <div className="container mx-auto">
        <Card className="flex flex-col items-center p-8 md:p-12 lg:p-16 bg-orange-100">
          <div className="max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Join Our Community
            </h2>
            <p className="md:text-md">
              Stay updated with our latest events and programs. Sign up for our
              activities today!
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <ButtonLink to="/contact" variant="primary">
              Sign Up
            </ButtonLink>
            <ButtonLink to="/contact" variant="tertiary">
              Contact
            </ButtonLink>
          </div>
        </Card>
      </div>
    </section>
  );
}
