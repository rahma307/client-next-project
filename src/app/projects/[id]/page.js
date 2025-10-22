"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects"; // حسب مكانك

export default function ProjectDetails() {
  const params = useParams();
  const project = projects.find(p => p.id.toString() === params.id);

  if (!project) return <p className="text-center mt-16">المشروع غير موجود</p>;

  return (
    <div className="max-w-7xl mx-auto py-16 px-4" dir="rtl">
      {/* Breadcrumb */}
      <div className="w-full py-4 px-4 rounded-xl mb-8 bg-gradient-to-r from-white to-[#E9DFD513]">
        <nav className="text-sm text-right space-x-reverse space-x-2">
          <Link href="/" className="text-gray-600 hover:underline">الرئيسية</Link>
          <span className="text-gray-400">/</span>
          <Link href="/projects" className="text-gray-600 hover:underline">المشاريع</Link>
          <span className="text-gray-400">/</span>
          <span className="font-semibold text-[#594534]">{project.category}</span>
        </nav>
      </div>

      {/* العنوان */}
      <h1 className="text-3xl font-bold mb-8 text-right text-[#594534]">{project.name}</h1>

      {/* التفاصيل + الصور */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* تفاصيل المشروع */}
        <div className="order-2 md:order-1 md:col-span-1">
          <div className="rounded-xl shadow p-6 text-right space-y-4 bg-gradient-to-r from-white to-[#E9DFD513]">
            <p><span className="font-semibold text-[#594534]">الاسم:</span> {project.name}</p>
            <p><span className="font-semibold text-[#594534]">وصف المشروع:</span> {project.description}</p>
            <p><span className="font-semibold text-[#594534]">الموقع:</span> {project.location}</p>
            <p><span className="font-semibold text-[#594534]">تاريخ التنفيذ:</span> {project.date}</p>
            <p><span className="font-semibold text-[#594534]">حالة المشروع:</span> {project.status}</p>
            <p><span className="font-semibold text-[#594534]">فئة المشروع:</span> {project.category}</p>
          </div>
        </div>

       
      </div>
        {/* صور المشروع */}
<div className="grid grid-cols-3 gap-4 mt-10 h-[900px]">
  {/* العمود 1 */}
  <div className="relative h-[60%] rounded-2xl overflow-hidden shadow">
    <Image src={project.images[0]} alt="صورة 1" fill className="object-cover" />
  </div>
  <div className="relative h-[119%] rounded-2xl overflow-hidden shadow">
    <Image src={project.images[1]} alt="صورة 2" fill className="object-cover" />
  </div>

  {/* العمود 2 */}
  <div className="relative h-[90%] rounded-2xl overflow-hidden shadow">
    <Image src={project.images[2]} alt="صورة 3" fill className="object-cover" />
  </div>
  <div className="relative h-[120%] rounded-2xl overflow-hidden shadow bottom-44">
    <Image src={project.images[3]} alt="صورة 4" fill className="object-cover" />
  </div>

  {/* العمود 3 */}
  <div className="relative h-[60%] rounded-2xl overflow-hidden shadow top-[5.4rem]">
    <Image src={project.images[4]} alt="صورة 5" fill className="object-cover" />
  </div>
  <div className="relative h-[90%] rounded-2xl overflow-hidden shadow bottom-10">
    <Image src={project.images[5]} alt="صورة 6" fill className="object-cover" />
  </div>
</div>



    </div>
  );
}
