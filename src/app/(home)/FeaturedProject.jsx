"use client";

import { useState } from "react";
import Image from "next/image";

// Put your images in /public/projects/ and update the paths below
const projects = [
  {
    id: 1,
    name: "Chembaka",
    location: "Punkunnam",
    status: "Ongoing",
    tag: "New Launch",
    apartmentType: "2 & 3 BHK",
    areaRange: "1060 - 1725 Sq.Ft",
    premiumNote: "up to 70% open space",
    rera: "K-RERA/PRJ/TSR/111/2026",
    image: "/images/home/img88.png",
  },
  {
    id: 2,
    name: "Elan Heights",
    location: "Vazhuthacaud",
    status: "Ongoing",
    apartmentType: "2 & 3 BHK",
    areaRange: "1150 - 1850 Sq.Ft",
    premiumNote: "up to 65% open space",
    rera: "K-RERA/PRJ/TVM/204/2026",
    image: "/images/home/img99.jpg",
  },
];

export default function FeaturedProjects() {
  const [expandedId, setExpandedId] = useState(projects[0].id);

  return (
    <section className="relative py-16 px-6 md:px-12 bg-[#eef1e2] overflow-hidden">
      {/* subtle dotted background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #365314 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-8">
          Featured Projects
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          {projects.map((project) => {
            const isExpanded = project.id === expandedId;

            return (
              <div
                key={project.id}
                style={{ flexGrow: isExpanded ? 3 : 1, flexBasis: 0 }}
                className="relative rounded-[28px] bg-white shadow-[0_15px_45px_-20px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-500 ease-in-out min-h-[300px] md:min-h-[400px] flex flex-col md:flex-row min-w-0"
              >
                {/* Image side (also acts as the click target when collapsed) */}
                <div
                  onClick={() => !isExpanded && setExpandedId(project.id)}
                  className={`relative shrink-0 overflow-hidden ${
                    isExpanded ? "w-full md:w-[42%] h-56 md:h-auto" : "w-full h-56 md:h-auto flex-1 cursor-pointer"
                  }`}
                >
                  <Image
                    width={500}
                    height={300}
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 bg-emerald-900/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.status}
                  </span>

                  {!isExpanded && (
                    <span className="absolute bottom-4 left-4 text-white/90 text-sm font-semibold tracking-wide">
                      {project.name}
                    </span>
                  )}
                </div>

                {/* Details side — only rendered for the expanded card */}
                {isExpanded && (
                  <div className="relative flex-1 p-6 md:p-8 flex flex-col justify-between min-w-0">
                    {project.tag && (
                      <span className="absolute -top-0 right-6 md:right-8 bg-red-600 text-white text-xs font-semibold px-4 py-1.5 rounded-b-lg shadow-md">
                        {project.tag}
                      </span>
                    )}

                    <div>
                      <h3 className="text-2xl md:text-[28px] font-bold text-neutral-900 tracking-wide uppercase">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-neutral-500 text-sm mt-1.5 mb-6 uppercase tracking-wide">
                        <PinIcon className="w-4 h-4" />
                        {project.location}
                      </div>

                      <div className="space-y-4">
                        <DetailRow icon={BuildingIcon} label="Apartment type" value={project.apartmentType} />
                        <DetailRow icon={RulerIcon} label="Area range" value={project.areaRange} />
                        <DetailRow icon={GemIcon} label="Premium luxury apartment" value={project.premiumNote} />
                        <DetailRow icon={DocIcon} label="K.RERA" value={project.rera} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                      <button className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors">
                        View Project Details
                      </button>
                      <button className="flex items-center gap-1.5 rounded-full bg-emerald-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-emerald-800 transition-colors">
                        Enquire Now
                        <ArrowIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" />
      <div>
        <p className="text-sm font-medium text-neutral-800">{label}</p>
        <p className="text-sm text-neutral-500">{value}</p>
      </div>
    </div>
  );
}

/* ---------- inline SVG icons (no external icon library needed) ---------- */

function PinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function BuildingIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="3" width="10" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 8h6v13h-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function RulerIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="2.5"
        y="8.5"
        width="19"
        height="7"
        rx="1"
        transform="rotate(-45 2.5 8.5)"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M8 8l2 2M11.5 4.5l2 2M4.5 11.5l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function GemIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 9l3.5-5.5h9L20 9l-8 12L4 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 9h16M9.5 3.5 8 9l4 12 4-12-1.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function DocIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 2h9l3 3v17H6V2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M15 2v3h3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12h6M9 15.5h6M9 8.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}