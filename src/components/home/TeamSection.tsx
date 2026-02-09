"use client";

import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Reza Pahlavan",
    role: "Inhaber",
    image: "/images/team/member1.jpg",
  },
  {
    name: "Maria Schmidt",
    role: "Bauleitung & Planung",
    image: "/images/team/member2.jpg",
  },
  {
    name: "Thomas Müller",
    role: "Handwerksmeister",
    image: "/images/team/member3.jpg",
  },
];

export const TeamSection = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-24" id="team">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-16">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f55733] to-[#d43d1a] font-bold tracking-wider uppercase w-fit text-sm mb-4">
            Unser Team
          </span>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-[#333333] md:text-6xl">
            Experten für Ihr Bauvorhaben
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group relative aspect-3/4 w-full overflow-hidden rounded-[40px] bg-gray-100"
            >
              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Sticky Info Block (Bottom Left) */}
              <div className="absolute bottom-0 left-0 z-10 flex flex-col items-start">
                {/* Top Connector (Above the block, aligned left) */}
                <div className="relative h-10 w-10">
                  <svg
                    className="absolute bottom-0 left-0 h-full w-full"
                    viewBox="0 0 40 40"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    {/* Fills Bottom-Left corner */}
                    <path
                      d="M0 40V0C0 22.0914 17.9086 40 40 40H0Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>

                <div className="flex items-end">
                  {/* Info Content Block */}
                  <div className="bg-white pt-5 pr-8 pb-5 pl-5 rounded-tr-[40px] min-w-[240px]">
                    <h3 className="font-sans text-xl font-bold text-[#333333]">
                      {member.name}
                    </h3>
                    <p className="font-sans text-sm font-medium text-[#545454] mt-1 uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>

                  {/* Right Connector (Right of the block, aligned bottom) */}
                  <div className="relative h-10 w-10">
                    <svg
                      className="absolute bottom-0 left-0 h-full w-full"
                      viewBox="0 0 40 40"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      {/* Fills Bottom-Left corner */}
                      <path
                        d="M0 40V0C0 22.0914 17.9086 40 40 40H0Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
