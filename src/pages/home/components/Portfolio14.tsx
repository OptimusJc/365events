"use client";

import { Badge } from "@relume_io/relume-ui";
import Card from "../../../components/Card";

export function Portfolio14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container lg:mx-auto">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20 flex flex-col items-center justify-center">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our Achievements
          </h2>
          <p className="md:text-md">
            Celebrating our commitment to excellence in sports.
          </p>
        </div>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Community Sports Award</a>
              </h3>
              <p>Recognizing local sports initiatives.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4 text-orange-600">
                <Badge>
                  <a href="#">Community Impact</a>
                </Badge>
                <Badge>
                  <a href="#">Sports Excellence</a>
                </Badge>
                <Badge>
                  <a href="#">Faith Driven</a>
                </Badge>
              </div>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Leadership Award</a>
              </h3>
              <p>Honoring outstanding coaching leadership.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4 text-orange-600">
                <Badge>
                  <a href="#">Leadership Skills</a>
                </Badge>
                <Badge>
                  <a href="#">Team Development</a>
                </Badge>
                <Badge>
                  <a href="#">Mentorship Program</a>
                </Badge>
              </div>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Best Practices Award</a>
              </h3>
              <p>Promoting integrity in sports management.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4 text-orange-600">
                <Badge>
                  <a href="#">Integrity Focus</a>
                </Badge>
                <Badge>
                  <a href="#">Ethical Standards</a>
                </Badge>
                <Badge>
                  <a href="#">Professional Growth</a>
                </Badge>
              </div>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Community Engagement Award</a>
              </h3>
              <p>Fostering community through sports events.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4 text-orange-600">
                <Badge>
                  <a href="#">Community Service</a>
                </Badge>
                <Badge>
                  <a href="#">Sports Outreach</a>
                </Badge>
                <Badge>
                  <a href="#">Faith Integration</a>
                </Badge>
              </div>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Youth Sports Award</a>
              </h3>
              <p>Empowering youth through sports.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4 text-orange-600">
                <Badge>
                  <a href="#">Youth Empowerment</a>
                </Badge>
                <Badge>
                  <a href="#">Skill Development</a>
                </Badge>
                <Badge>
                  <a href="#">Faith-Based</a>
                </Badge>
              </div>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Overall Excellence Award</a>
              </h3>
              <p>Recognizing holistic development in sports.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4 text-orange-600">
                <Badge>
                  <a href="#">Holistic Approach</a>
                </Badge>
                <Badge>
                  <a href="#">Faith Integration</a>
                </Badge>
                <Badge>
                  <a href="#">Community Focus</a>
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
