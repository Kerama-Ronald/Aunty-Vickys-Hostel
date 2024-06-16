import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Glance() {
  const glanceContainer = useRef(null);

  useGSAP(
    () => {
      //   gsap.from("img", {
      //     scrollTrigger: {
      //       trigger: "img",
      //       start: "top 80%",
      //     },
      //     duration: 1,
      //     scale: 1.1,
      //     opacity: 0,
      //     y: 50,
      //     ease: "power2.out",
      //   });

      const images: any[] = gsap.utils.toArray(".glc");

      images.map((image) => {
        gsap.from(image, {
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
          },
          duration: 3,
          scale: 1.2,
          opacity: 0,
          y: 50,
          ease: "power2.out",
        });
      });
      const boxes: any[] = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 2,
          ease: "power4.out",
          stagger: {
            each: 0.5,
            from: "start",
          },
        });
      });
    },
    { scope: glanceContainer }
  );
  return (
    <section className="py-16 px-4 sm:px-6 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div ref={glanceContainer} className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-[300px] w-full overflow-hidden">
              <img
                src="/images/rooms.jpg"
                alt="Aunt Vicky Hostel Room 1"
                width="400"
                height="300"
                className="glc origin-center h-[300px] w-full rounded-lg object-cover object-center"
                style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
              />
            </div>
            <div className="box">
              <h3 className="text-xl font-semibold">Cozy Dorm Rooms</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our dorm rooms offer a comfortable and affordable option for
                solo travelers or groups.
              </p>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col items-center justify-center space-y-4">
            <div className="h-[300px] w-full overflow-hidden">
              <img
                src="/images/outdoor.jpg"
                alt="Aunt Vicky Hostel Room 2"
                width="400"
                height="300"
                className="glc origin-center w-full rounded-lg object-cover object-center"
                style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
              />
            </div>
            <div className="box">
              <h3 className="text-xl font-semibold">Cozy Private Rooms</h3>
              <p className="text-gray-500 dark:text-gray-400">
                For those seeking more privacy, our private rooms provide a
                comfortable and peaceful retreat.
              </p>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col items-center justify-center space-y-4">
            <div className="h-[300px] w-full overflow-hidden">
              <img
                src="/images/outdoor-play.jpg"
                alt="Aunt Vicky Hostel Room 3"
                width="400"
                height="300"
                className="glc origin-center w-full rounded-lg object-cover object-center"
                style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
              />
            </div>
            <div className="box">
              <h3 className="box text-xl font-semibold">
                Family-Friendly Suites
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our spacious suites are perfect for families or groups, offering
                ample space and amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
