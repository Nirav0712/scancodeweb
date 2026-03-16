"use client";

import Image from "next/image";

const team = [
  {
    name: "Marvin McKinney",
    role: "Web Designer",
    image: "/images/team1.jpg",
  },
  {
    name: "Kathryn Murphy",
    role: "Medical Assistant",
    image: "/images/team2.jpg",
  },
  {
    name: "Annette Black",
    role: "Dog Trainer",
    image: "/images/team3.jpg",
  },
  {
    name: "Albert Kayle",
    role: "President Sales",
    image: "/images/team4.jpg",
  },
];

export default function NodeJS() {
  return (
    <section className="py-24 bg-[#f4f7fc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-blue-500 font-semibold tracking-widest mb-2">
            // MEET OUR STAFF //
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Dedicated Printing <br />
            <span className="text-[#ff6b6b] border-b-4 border-[#ff6b6b] pb-1">
              Professionals
            </span>
          </h2>

          <button className="mt-8 px-8 py-3 rounded-full text-white font-medium
          bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg hover:scale-105 transition">
            View More
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {team.map((member, index) => (
            <div key={index} className="flex justify-center">

              <div className="relative w-[250px] h-[360px] overflow-hidden
              rounded-t-[140px] rounded-b-[140px] shadow-lg group">

                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Name Box */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2
                w-[85%] bg-sky-400 text-center py-3 rounded-xl
                transition-all duration-300 group-hover:bg-sky-600">

                  <h4 className="font-semibold text-white text-lg">
                    {member.name}
                  </h4>

                  <p className="text-white text-sm">
                    {member.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}