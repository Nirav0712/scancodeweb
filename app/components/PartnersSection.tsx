// "use client";

// import React from "react";

// const partners = [
//   { name: "Lattice", emoji: "🔷" },
//   { name: "Clearbit", emoji: "🔵" },
//   { name: "Airtable", emoji: "🟠" },
//   { name: "Monday", emoji: "🔴" },
//   { name: "Dropbox", emoji: "📦" },
//   { name: "Notion", emoji: "⬛" },
// ];

// export default function PartnersSection() {
//   return (
//     <section className="py-20" style={{ background: "#f7f9fc" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <p className="section-label">// OUR PARTNERS //</p>
//           <h2 className="section-heading">
//             Trusted by 250+ Global IP Firms{" "}
//             <br className="hidden lg:block" />
//             <span className="highlight">and Legal Teams</span>
//           </h2>
//         </div>

//         {/* Partners row */}
//         <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
//           {partners.map((p, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-md cursor-pointer grayscale hover:grayscale-0"
//               style={{ background: "#fff", border: "1px solid #e5e7eb" }}
//             >
//               <span className="text-3xl">{p.emoji}</span>
//               <span className="font-bold text-gray-700 text-lg">{p.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const Partner = () => {
  const partners = [
    { name: "Gold", logo: "/images/Partner/1.png" },
    { name: "Sankalp", logo: "/images/Partner/2.png" },
    { name: "Vadilal", logo: "/images/Partner/3.png" },
    { name: "Adani", logo: "/images/Partner/4.png" },
    { name: "Apollo", logo: "/images/Partner/5.png" },
    { name: "Digital", logo: "/images/Partner/6.png" },
    { name: "SFW Gym", logo: "/images/Partner/7.png" },
    { name: "L&T", logo: "/images/Partner/8.png" },
    { name: "Ford", logo: "/images/Partner/9.png" },
    { name: "Aditya", logo: "/images/Partner/10.png" },
    { name: "BB", logo: "/images/Partner/11.png" },
    { name: "LG", logo: "/images/Partner/12.png" },
    { name: "Arvind", logo: "/images/Partner/13.png" },
  ];

  // duplicate for infinite scroll
  const duplicated = [...partners, ...partners];

  return (
    <section className="py-20 bg-[#f7f9fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">
            // OUR PARTNERS //
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Partnerships built on trust <br className="hidden lg:block" />
            <span className="text-blue-500">and success</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#f7f9fc] to-transparent z-10" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#f7f9fc] to-transparent z-10" />

          {/* Moving Track */}
          <div className="flex gap-8 w-max animate-scroll hover:[animation-play-state:paused]">
            {duplicated.map((partner, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-4
                  px-6 py-4
                  rounded-xl
                  bg-white
                  border border-gray-200
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-lg
                  hover:bg-blue-50
                  cursor-pointer
                  group
                  shrink-0
                "
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={50}
                  height={50}
                  className="object-contain group-hover:scale-110 transition"
                />

                <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Partner;


// "use client";

// import Image from "next/image";

// const Partner = () => {
//   const partners = [
//     { name: "gold", logo: "/images/Partner/1.png" },
//     { name: "sankalp", logo: "/images/Partner/2.png" },
//     { name: "vadilal", logo: "/images/Partner/3.png" },
//     { name: "adani", logo: "/images/Partner/4.png" },
//     { name: "Apollo", logo: "/images/Partner/5.png" },
//     { name: "Digital", logo: "/images/Partner/6.png" },
//     { name: "SFW Gym", logo: "/images/Partner/7.png" },
//     { name: "L&T", logo: "/images/Partner/8.png" },
//     { name: "Ford", logo: "/images/Partner/9.png" },
//     { name: "Aditya", logo: "/images/Partner/10.png" },
//     { name: "Bb", logo: "/images/Partner/11.png" },
//     { name: "Lg", logo: "/images/Partner/12.png" },
//     { name: "Arvind", logo: "/images/Partner/13.png" },

//   ];

//   const duplicated = [...partners, ...partners];

//   return (
//     <section className="bg-gray-100 py-4 overflow-hidden">
//       <div className="container mx-auto px-6">
//         {/* Main Flex Row */}
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* LEFT SIDE TEXT */}
//           <div className="lg:w-1/3 text-left">
//             <h2 className="text-5xl md:text-5xl font-bold text-[#162544] leading-tight">
//               Partnerships built on trust and success.
//             </h2>
//           </div>

//           {/* RIGHT SIDE SLIDER */}
//           <div className="lg:w-2/3 relative w-full overflow-hidden">
//             {/* Fade Left */}
//             <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-gray-100 to-transparent z-10" />

//             {/* Fade Right */}
//             <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-gray-100 to-transparent z-10" />

//             {/* Moving Track */}
//             <div className="flex w-max animate-scroll gap-10 items-center">
//               {duplicated.map((partner, index) => (
//                 <div
//                   key={index}
//                   className="shrink-0 flex justify-center items-center group"
//                 >
//                   <Image
//                     src={partner.logo}
//                     alt={partner.name}
//                     width={200}
//                     height={120}
//                     className="
//                       objet-contain
//                         h-20
//                         md:h-32
//                         w-auto
//                       transition-all duration-300
//                       opacity-70
//                       scale-95
//                       group-hover:opacity-100
//                       group-hover:scale-110
//                     "
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animation */}
//       <style jsx>{`
//         .animate-scroll {
//           animation: scroll 60s linear infinite;
//         }

//         @keyframes scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Partner;
