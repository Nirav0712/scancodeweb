// "use client";

// import React from "react";
// import Link from "next/link";

// interface Service {
//   image: string;
//   title: string;
//   number: string;
//   imagePosition?: string;
//   arrowBg: string;
// }

// const services: Service[] = [
//   {
//     image: "/images/servicesection/service-1.jpeg",
//     title: "Printing Service",
//     number: "SERVICES_01",
//     imagePosition: "center",
//     arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
//   },
//   {
//     image: "/images/servicesection/service-2.jpeg",
//     title: "Printing Service",
//     number: "SERVICES_02",
//     imagePosition: "center",
//     arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
//   },
//   {
//     image: "/images/servicesection/service-3.jpeg",
//     title: "Printing Service",
//     number: "SERVICES_03",
//     imagePosition: "center",
//     arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-24 bg-[#f0f1f1]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
//           <div>
//             <p className="text-sm font-semibold tracking-[0.18em] text-gray-500 uppercase mb-3">
//               // OUR SERVICES //
//             </p>

//             <h2 className="text-[42px] md:text-[56px] leading-none font-semibold text-black">
//               <span className="relative inline-block">
//                 Print Solutions
//                 <span className="absolute left-0 bottom-1 w-full h-[2px] bg-white" />
//               </span>
//               <br />
//               for Every Need
//             </h2>
//           </div>

//           <div className="flex flex-col items-start lg:items-end gap-4">
//             <p className="text-gray-500 text-base max-w-sm">
//               Custom prints, fast delivery, premium quality — tailored to your
//               needs.
//             </p>

//             <Link
//               href="/services"
//               className="relative inline-flex items-center justify-center min-w-[165px] h-[60px] px-9 text-white text-[17px] font-medium rounded-full transition-all duration-300 hover:scale-105"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #7b61ff 0%, #1fd1c3 100%)",
//               }}
//             >
//               <span className="relative z-10">View More</span>
//               <span
//                 className="absolute top-[3px] left-[3px] right-[-6px] bottom-[3px] rounded-full border-2 border-white/95"
//                 aria-hidden="true"
//               />
//             </Link>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {services.map((svc, i) => (
//             <div
//               key={i}
//               className="group relative h-[420px] overflow-hidden rounded-[28px] cursor-pointer"
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-90"
//                 style={{
//                   backgroundImage: `url(${svc.image})`,
//                   backgroundPosition: svc.imagePosition || "center",
//                 }}
//               />

//               <div className="absolute inset-0 bg-black/5 transition-all duration-500 group-hover:bg-black/15" />

//               <div className="absolute top-3 right-3 z-20">
//                 <div
//                   className="flex h-[64px] w-[64px] items-center justify-center rounded-full text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ff7f7f] group-hover:rotate-12"
//                   style={{
//                     background: svc.arrowBg,
//                   }}
//                 >
//                   <span className="text-[28px] font-light leading-none -mt-[2px]">
//                     ↗
//                   </span>
//                 </div>
//               </div>

//               <div className="absolute left-0 right-0 bottom-0 z-20 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//                 <div
//                   className="px-8 py-8"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #7c4dff 0%, #45aaf2 45%, #20d6c7 100%)",
//                     borderTopLeftRadius: "22px",
//                     borderTopRightRadius: "22px",
//                     borderBottomLeftRadius: "28px",
//                     borderBottomRightRadius: "28px",
//                   }}
//                 >
//                   <p className="text-white/85 text-[15px] font-medium text-center mb-3">
//                     {svc.number}
//                   </p>
//                   <h3 className="text-white text-[24px] text-center font-semibold leading-tight">
//                     {svc.title}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React from "react";
import Link from "next/link";

interface Service {
  image: string;
  title: string;
  number: string;
  imagePosition?: string;
  arrowBg: string;
}

const services: Service[] = [
  {
    image: "/images/servicesection/service-1.jpeg",
    title: "Printing Service",
    number: "SERVICES_01",
    imagePosition: "center",
    arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
  },
  {
    image: "/images/servicesection/service-2.jpeg",
    title: "Printing Service",
    number: "SERVICES_02",
    imagePosition: "center",
    arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
  },
  {
    image: "/images/servicesection/service-3.jpeg",
    title: "Printing Service",
    number: "SERVICES_03",
    imagePosition: "center",
    arrowBg: "linear-gradient(135deg, #7b61ff 0%, #22d3c5 100%)",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-gray-500 uppercase mb-3">
              // OUR SERVICES //
            </p>

            <h2 className="text-[42px] md:text-[56px] leading-none font-semibold text-black">
              <span className="relative inline-block">
                Print Solutions
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-white" />
              </span>
              <br />
              for Every Need
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-gray-500 text-base max-w-sm">
              Custom prints, fast delivery, premium quality — tailored to your
              needs.
            </p>

            <Link
              href="/services"
              className="relative inline-flex items-center justify-center min-w-[165px] h-[60px] px-9 text-white text-[17px] font-medium rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, #7b61ff 0%, #1fd1c3 100%)",
              }}
            >
              <span className="relative z-10">View More</span>
              <span
                className="absolute top-[3px] left-[3px] right-[-6px] bottom-[3px] rounded-full border-2 border-white/95"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="services-wrap flex flex-col xl:flex-row gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="service-card group relative h-[550px] flex-1 overflow-hidden rounded-[28px] cursor-pointer transition-all duration-500 ease-in-out bg-white"
            >
              {/* Content Wrapper that shrinks on hover to reveal bg-white */}
              <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:inset-[12px] overflow-hidden rounded-[28px] group-hover:rounded-[22px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${svc.image})`,
                    backgroundPosition: svc.imagePosition || "center",
                  }}
                />

                {/* Arrow Button Container */}
                <div className="absolute top-0 right-0 z-30 ">
                  <div className="relative isolate group-hover:translate-x-[3px] group-hover:-translate-y-[2px] transition-transform duration-500">
                    <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-white rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-4">
                      <div
                        className="box-border flex h-[64px] w-[64px] items-center justify-center rounded-full text-white transition-all duration-300 group-hover:scale-95 group-hover:rotate-12"
                        style={{
                          background: svc.arrowBg,
                        }}
                      >
                        <span className="text-[28px] font-light leading-none -mt-[2px]">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 right-0 bottom-0 z-20 px-0">
                  <div
                    className="mx-0 translate-y-[72px] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,77,255,0.88) 0%, rgba(69,170,242,0.82) 45%, rgba(32,214,199,0.88) 100%)",
                      borderTopLeftRadius: "22px",
                      borderTopRightRadius: "22px",
                      borderBottomLeftRadius: "28px",
                      borderBottomRightRadius: "28px",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <div className="px-8 py-8">
                      <p className="text-white/85 text-[15px] font-medium text-center mb-3">
                        {svc.number}
                      </p>
                      <h3 className="text-white text-[24px] text-center font-semibold leading-tight">
                        {svc.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1280px) {
          .services-wrap:hover .service-card {
            flex: 0.9;
          }

          .services-wrap .service-card:hover {
            flex: 1.25;
          }
        }
      `}</style>
    </section>
  );
}