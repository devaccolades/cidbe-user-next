"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import EnquiryModal from "../../components/EnquiryForm/EnquiryModal";
import { getFeaturedProject, getProjectDetails } from "../../services/services";

const defaultProjects = [
  // {
  //   id: 1,
  //   name: "Chembaka",
  //   location: "Punkunnam",
  //   status: "Ongoing",
  //   tag: "New Launch",
  //   apartmentType: "2 & 3 BHK",
  //   areaRange: "1060 - 1725 Sq.Ft",
  //   premiumNote: "up to 70% open space",
  //   rera: "K-RERA/PRJ/TSR/111/2026",
  //   image: "/images/home/img99.jpg",
  //   logo: "/images/home/cid.svg",
  // },
  // {
  //   id: 2,
  //   name: "Cassia",
  //   location: "Vazhuthacaud",
  //   status: "Ongoing",
  //   apartmentType: "2 & 3 BHK",
  //   areaRange: "1150 - 1850 Sq.Ft",
  //   premiumNote: "up to 65% open space",
  //   rera: "K-RERA/PRJ/TVM/204/2026",
  //   image: "/images/home/img88.png",
  //   logo: "/images/home/cas.svg",
  // },
];

const resolveImageSrc = (src) => {
  if (!src) return "";

  if (typeof src === "object") {
    if (src.url) return resolveImageSrc(src.url);
    if (src.data?.attributes?.url) return resolveImageSrc(src.data.attributes.url);
    if (src.data?.url) return resolveImageSrc(src.data.url);
    if (src.formats?.large?.url) return resolveImageSrc(src.formats.large.url);
    if (src.formats?.medium?.url) return resolveImageSrc(src.formats.medium.url);
    if (src.formats?.small?.url) return resolveImageSrc(src.formats.small.url);
    if (src.path) return resolveImageSrc(src.path);
    return "";
  }

  if (src.startsWith("http")) return src;
  if (src.startsWith("//")) return `https:${src}`;
  if (src.startsWith("/images/") || src.startsWith("/icons/")) return src;
  if (src.startsWith("/")) return `https://backend.cidbi.com${src}`;
  return `https://backend.cidbi.com/${src}`;
};

const normalizeProject = (project, detail = null) => {
  const detailProject = detail || project;

  return {
    id: project.id,
    slug: project.slug || project.slug_name || project.id,
    name: project.name || project.title || project.slug || "",
    location: project.location || project.address || "",
    status: project.status || "Ongoing",
    tag:
      project.tag ||
      project.badge ||
      project.promo_tag ||
      (project.name?.toUpperCase?.().includes("CHEMBAKA") ? "New Launch" : "") ||
      (detailProject?.name?.toUpperCase?.().includes("CHEMBAKA") ? "New Launch" : "") ||
      "",
    apartmentType: project.apartment_type || (project.bhk ? `${project.bhk} BHK` : ""),
    areaRange:
      project.area_range ||
      (project.area_from && project.area_to
        ? `${project.area_from} - ${project.area_to} Sq.Ft`
        : project.area || ""),
    premiumNote: project.premiumNote || project.sub_name || project.description || "",
    rera: project.rera || project.rera_number || project.rera_code || "",
    image: resolveImageSrc(
      project.banner || project.thumbnail || project.image || project.project_image || project.featured_image,
    ),
    logo: resolveImageSrc(
      detailProject.logo ||
        detailProject.project_logo ||
        detailProject.company_logo ||
        detailProject.companyLogo ||
        detailProject.logo_url ||
        detailProject?.logo?.url ||
        detailProject?.project_logo?.url ||
        detailProject?.company_logo?.url ||
        detailProject?.companyLogo?.url ||
        detailProject?.logo?.data?.attributes?.url ||
        detailProject?.project_logo?.data?.attributes?.url ||
        detailProject?.company_logo?.data?.attributes?.url ||
        project.qr_code ||
        project.thumbnail ||
        project.background_image ||
        ""
    ),
  };
};

export default function FeaturedProjects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [expandedId, setExpandedId] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleEnquiryToggle = () => setEnquiryOpen((prev) => !prev);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const res = await getFeaturedProject(1, 4);
        console.log("Featured Projects Response:", res);
        const { StatusCode, data } = res?.data || {};

        if (StatusCode === 6000 && Array.isArray(data) && data.length > 0) {
          const enrichedProjects = await Promise.all(
            data.map(async (project) => {
              const slug = project.slug || project.slug_name;

              if (!slug) return normalizeProject(project);

              try {
                const detailRes = await getProjectDetails(slug);
                const detailData = detailRes?.data?.data || detailRes?.data || {};
                return normalizeProject(project, detailData);
              } catch (detailError) {
                console.error(`Failed to fetch project detail for ${slug}:`, detailError);
                return normalizeProject(project);
              }
            })
          );

          setProjects(enrichedProjects);
        }
      } catch (error) {
        console.error("Failed to fetch featured projects:", error);
      }
    };

    fetchFeaturedProjects();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => {
      setIsDesktop(e.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!projects?.length) return;

    if (isDesktop) {
      setExpandedId(projects[0].id);
    } else {
      setExpandedId(null);
    }
  }, [projects, isDesktop]);

  return (
    <section
      className="
        relative
        py-6 md:py-10 lg:py-16
        px-6 md:px-12
        bg-[#eef1e2]
        overflow-hidden
      "
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/fr.svg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <h2
          className="
            font-[general-sans-medium]
            text-[24px]
            md:text-[32px]
            lg:text-[38px]
            -tracking-[2%]
            text-neutral-900
            mb-4
            md:mb-8
          "
        >
          Featured Projects
        </h2>

        <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
          {projects.map((project) => {
            const isExpanded = project.id === expandedId;

            return (
              <div
                key={project.id}
                className={`
                  relative
                  rounded-[20px]
                  bg-white
                  shadow-[0_15px_45px_-20px_rgba(0,0,0,0.35)]
                  overflow-hidden
                  transition-all
                  duration-500
                  ease-in-out
                  flex
                  flex-col
                  md:flex-row
                  min-w-0

                  ${isExpanded ? "md:flex-[3_1_0%]" : "md:flex-[1_1_0%]"}
                `}
              >
                {/* ================= TAG ================= */}
                {project.tag && (
                  <span
                    className="
                      absolute
                      top-2
                      right-2
                      z-20
                      font-[inter-regular]
                      text-[13px]
                      md:text-[14px]
                      bg-[#FF0000]
                      text-white
                      text-xs
                      font-semibold
                      px-5
                      py-1.5
                      rounded-[5px]
                      shadow-md
                    "
                  >
                    {project.tag}
                  </span>
                )}

                {/* ================= IMAGE ================= */}
                <div
                  onClick={() => {
                    if (!isExpanded) {
                      setExpandedId(project.id);
                    }
                  }}
                  className={`
                    relative
                    overflow-hidden
                    w-full
                    h-[260px]
                    min-h-[260px]
                    md:h-auto
                    ${isExpanded ? "md:w-[42%]" : "cursor-pointer"}
                    bg-[#f8fafb]
                  `}
                >
                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      p-1
                      md:p-2
                      rounded-[20px]
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />

                  {/* Status */}
                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      border
                      border-[#FFFFFF52]
                      bg-[#0B5740]
                      text-white
                      text-[12px]
                      md:text-[14px]
                      font-[inter-regular]
                      px-3
                      py-1
                      rounded-full
                    "
                  >
                    {project.status}
                  </span>

                  {/* Logo */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      md:bottom-6
                      md:left-6
                    "
                  >
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={project.name}
                        width={120}
                        height={40}
                        className="
                          h-10
                          md:h-12
                          w-auto
                          object-contain
                          drop-shadow-md
                        "
                      />
                    ) : (
                      <span className="text-white/90 text-sm font-semibold tracking-wide">
                        {project.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* ================= DETAILS ================= */}
                {isExpanded && (
                  <div
                    className="
                      relative
                      flex-1
                      p-4
                      md:p-5
                      xl:p-6
                      flex
                      flex-col
                      justify-between
                      min-w-0
                    "
                  >
                    {/* Project Information */}
                    <div>
                      {/* Project Name */}
                      <h3
                        className="
                          font-[general-sans-regular]
                          text-[20px]
                          md:text-[28px]
                          lg:text-[32px]
                          tracking-wide
                          uppercase
                        "
                      >
                        {project.name}
                      </h3>

                      {/* Location */}
                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          font-[inter-medium]
                          lg:text-[16px]
                          md:text-[14px]
                          text-[13px]
                          text-[#7A7A7A]
                          mb-2
                          md:mb-4
                          uppercase
                          tracking-wide
                        "
                      >
                        <Image
                          src="/images/home/loc.svg"
                          width={20}
                          height={20}
                          alt="location"
                        />

                        {project.location}
                      </div>

                      {/* Details */}
                      <div className="space-y-4">
                        <DetailRow
                          icon="/images/home/build.svg"
                          label="Apartment type"
                          value={project.apartmentType}
                        />

                        <DetailRow
                          icon="/images/home/square.svg"
                          label="Area range"
                          value={project.areaRange}
                        />

                        <DetailRow
                          icon="/images/home/diamond.svg"
                          label="Premium luxury apartment"
                          value={project.premiumNote}
                        />

                        <DetailRow
                          icon="/images/home/rera.svg"
                          label="K.RERA"
                          value={project.rera}
                        />
                      </div>
                    </div>

                    {/* ================= BUTTONS (Side-by-side on all screens) ================= */}
                    <div
                      className="
                        flex
                        flex-row
                        items-center
                        gap-3
                        mt-6
                        lg:mt-8
                      "
                    >
                      <Link href={`/featured-projects/${project.slug || project.id}`}>
                        <button
                          className="
                            rounded-[8px]
                            border
                            border-[#052D23]
                            font-[general-sans-medium]
                            text-[13px]
                            text-[#052D23]
                            px-2
                            lg:px-5
                            py-2
                            lg:py-2.5
                            hover:bg-neutral-50
                            transition-colors
                          "
                        >
                          View Details
                        </button>
                      </Link>

                      <button
                        onClick={() => {
                          setSelectedProjectId(project.id);
                          setEnquiryOpen(true);
                        }}
                        className="
                          flex
                          items-center
                          gap-1.5
                          border-[#052D23]
                          rounded-[8px]
                          bg-emerald-900
                          text-white
                          px-2
                          lg:px-5
                          py-2
                          lg:py-2.5
                          font-[general-sans-medium]
                          text-[13px]
                          hover:bg-emerald-800
                          transition-colors
                        "
                      >
                        Enquire Now
                        <Image
                          src="/images/home/ar.svg"
                          width={10}
                          height={10}
                          className="size-[20px]"
                          alt="arrow"
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <EnquiryModal open={enquiryOpen} handleOpen={handleEnquiryToggle} projectId={selectedProjectId} />
    </section>
  );
}

/* ================= DETAIL ROW ================= */

function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Image
        src={icon}
        alt={label}
        width={20}
        height={20}
        className="shrink-0 mt-0.5"
      />

      <div>
        <p
          className="
            font-[general-sans-medium]
            text-[13px]
            md:text-[14px]
            lg:text-[16px]
            text-[#052D23]
          "
        >
          {label}
        </p>

        <p
          className="
            font-[general-sans-regular]
            text-[13px]
            md:text-[14px]
            lg:text-[16px]
            text-[#052D23]
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}