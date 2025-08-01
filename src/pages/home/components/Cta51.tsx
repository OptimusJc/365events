"use client";

import { Button } from "@relume_io/relume-ui";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

export function Cta51() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Card className="flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Join Our Community of Faith
            </h2>
            <p className="md:text-md">
              Stay updated with our latest events and programs. Sign up for our
              newsletter today!
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Link to="/contact">
              <Button
                title="Sign Up"
                className="cursor-pointer border-2 border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 hover:border-gray-400 hover:text-black transition-colors"
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                title="Contact"
                variant="secondary"
                className="cursor-pointer border-2 border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 hover:border-gray-400 hover:text-black transition-colors"
              >
                Contact
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
