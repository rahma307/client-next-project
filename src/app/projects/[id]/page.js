"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/hooks/useLanguage";
import { projects as projectsAr } from "../../data/projects";
import { projects as projectsEn } from "../../data/projectsENG";

export default function ProjectDetails() {
  const { language } = useLanguage();
  const projects = language === "ar" ? projectsAr : projectsEn;
  const params = useParams();
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project)
    return (
      <p className="text-center mt-16">
        {language === "ar" ? "المشروع غير موجود" : "Project not found"}
      </p>
    );

  return (
    <div className="mx-auto py-16 2xl:px-40 px-8 md:px-16" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* 🔹 Breadcrumb */}
      <div className="w-full py-4 rounded-xl mb-8 bg-gradient-to-r from-white to-[#E9DFD513]">
        <nav className={`text-sm ${language === "ar" ? "text-right space-x-reverse space-x-2" : "text-left space-x-2"}`}>
          <Link href="/" className="text-secondary hover:underline">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/projects" className="text-secondary hover:underline">
            {language === "ar" ? "المشاريع" : "Projects"}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="font-semibold text-primary">{project.category}</span>
        </nav>
      </div>
{/* 🔹 العنوان */}
<h1 className={`text-3xl font-bold mb-8 text-primary ${language === "ar" ? "text-right" : "text-left"}`}>
  {project.name}
</h1>

{/* 🔹 تفاصيل المشروع */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-[150vw] w-[80vw]">
  <div className="order-2 md:order-1 md:col-span-1">
    <div
      className={`rounded-xl shadow p-6 space-y-4 ${language === "ar" ? "text-right" : "text-left"}`}
      style={{
        background: "linear-gradient(133.84deg, #FFFFFF 6.49%, rgba(233, 223, 213, 0.12) 97.11%)"
      }}
    >
      <p className="text-secondary">
        <span className="font-semibold text-primary">{language === "ar" ? "الاسم:" : "Name:"}</span> {project.name}
      </p>
      <p className="text-secondary">
        <span className="font-semibold text-primary">{language === "ar" ? "وصف المشروع:" : "Description:"}</span> {project.description}
      </p>
      <p className="text-secondary">
        <span className="font-semibold text-primary">{language === "ar" ? "الموقع:" : "Location:"}</span> {project.location}
      </p>
      <p className="text-secondary">
        <span className="font-semibold text-primary">{language === "ar" ? "تاريخ التنفيذ:" : "Date:"}</span> {project.date}
      </p>
      <p className="text-secondary">
        <span className="font-semibold text-primary">{language === "ar" ? "حالة المشروع:" : "Status:"}</span> {project.status}
      </p>
      <p className="text-secondary">
        <span className="font-semibold text-primary">{language === "ar" ? "فئة المشروع:" : "Category:"}</span> {project.category}
      </p>
    </div>
  </div>
</div>


      {/* 🔹 صور المشروع */}
      <div className="hidden md:grid grid-cols-3 gap-4 mt-10 h-[900px]">
        <div className="relative h-[68%] xl:h-[79%] rounded-2xl overflow-hidden shadow">
          <Image src={project.images[0]} alt="صورة 1" fill className="object-cover" />
        </div>
        <div className="relative h-[110%] xl:h-[117%] rounded-2xl overflow-hidden shadow">
          <Image src={project.images[1]} alt="صورة 2" fill className="object-cover" />
        </div>
        <div className="relative h-[92%] 2xl:h-[96%] rounded-2xl overflow-hidden shadow">
          <Image src={project.images[2]} alt="صورة 3" fill className="object-cover" />
        </div>
        <div className="relative h-[111%] xl:h-[114%] rounded-2xl overflow-hidden shadow bottom-34 xl:bottom-20">
          <Image src={project.images[3]} alt="صورة 4" fill className="object-cover" />
        </div>
        <div className="relative h-[68%] xl:h-[75%] rounded-2xl overflow-hidden shadow top-[3.5rem] xl:top-[5.7rem]">
          <Image src={project.images[4]} alt="صورة 5" fill className="object-cover" />
        </div>
        <div className="relative h-[90%] xl:h-[97%] rounded-2xl overflow-hidden shadow bottom-10 xl:bottom-0">
          <Image src={project.images[5]} alt="صورة 6" fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-10 md:hidden">
        {project.images.map((img, index) => (
          <div key={index} className="relative h-[80vw] sm:h-[80vw] rounded-2xl overflow-hidden shadow">
            <Image src={img} alt={`صورة ${index + 1}`} fill className="object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
}
