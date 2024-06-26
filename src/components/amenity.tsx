import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Amenity() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(container, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out",
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
          duration: 3,
          ease: "power4.out",
          stagger: {
            each: 0.5,
            from: "start",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      id="amenities"
      className="py-16 fade-up md:py-24 lg:py-32"
    >
      <div
        ref={container}
        className="container px-6 lg:px-20 zoom-in mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div className="box flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-12 w-12 text-primary"
          >
            <path d="M5 13a10 10 0 0 1 14 0"></path>
            <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
            <path d="M2 8.82a15 15 0 0 1 20 0"></path>
            <line x1="12" x2="12.01" y1="20" y2="20"></line>
          </svg>
          <h3 className="mt-4 text-xl font-semibold">Free WiFi</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Stay connected with our high-speed internet.
          </p>
        </div>
        <div className="box flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-12 w-12 text-primary"
          >
            <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"></path>
          </svg>
          <h3 className="mt-4 text-xl font-semibold">
            Complimentary Breakfast
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Start your day with a delicious and nutritious breakfast.
          </p>
        </div>
        <div className="box flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-12 w-12 text-primary"
          >
            <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"></path>
            <path d="M12 17.66L12 22"></path>
          </svg>
          <h3 className="mt-4 text-xl font-semibold">Cozy Lounge</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Unwind in our comfortable and inviting lounge area.
          </p>
        </div>
        <div className="box flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-12 w-12 text-primary"
          >
            <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"></path>
            <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"></path>
            <path d="M10 20h4"></path>
            <circle cx="16" cy="20" r="2"></circle>
            <circle cx="8" cy="20" r="2"></circle>
          </svg>
          <h3 className="mt-4 text-xl font-semibold">Secure Storage</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Keep your belongings safe with our secure storage facilities.
          </p>
        </div>
        <div className="box flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-12 w-12 text-primary"
          >
            <path d="m4 4 2.5 2.5"></path>
            <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"></path>
            <path d="M15 5 5 15"></path>
            <path d="M14 17v.01"></path>
            <path d="M10 16v.01"></path>
            <path d="M13 13v.01"></path>
            <path d="M16 10v.01"></path>
            <path d="M11 20v.01"></path>
            <path d="M17 14v.01"></path>
            <path d="M20 11v.01"></path>
          </svg>
          <h3 className="mt-4 text-xl font-semibold">Private Bathrooms</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Enjoy the comfort of your own private bathroom.
          </p>
        </div>
        <div className="box flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-12 w-12 text-primary"
          >
            <path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path>
            <path d="M12 12v8a2 2 0 0 0 4 0"></path>
            <path d="M12 2v1"></path>
          </svg>
          <h3 className="mt-4 text-xl font-semibold">Outdoor Terrace</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Relax and unwind on our peaceful outdoor terrace.
          </p>
        </div>
      </div>
    </section>
  );
}
