"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Gallery() {
  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="mx-auto md:px-16 px-4">

        {/* 🔹 السكشن الأول */}
        <div className="grid gap-4 mb-12">
          {/* نسخة الشاشات الكبيرة */}
          <div className="hidden lg:grid grid-cols-[1fr_1.8fr_1fr] gap-4 h-[80vh]">
            {/* العمود الأول */}
            <div className="relative overflow-hidden rounded-2xl">
              <Link href={`/projects/${projects[1].id}`}>
                <Image
                  src={projects[1].mainImage}
                  alt={projects[1].name}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>

            {/* العمود الأوسط الطويل */}
            <div className="relative overflow-hidden row-span-2 rounded-2xl">
              <Link href={`/projects/${projects[5].id}`}>
                <Image
                  src={projects[5].mainImage}
                  alt={projects[5].name}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>

            {/* العمود الثالث */}
            <div className="relative overflow-hidden rounded-2xl">
              <Link href={`/projects/${projects[2].id}`}>
                <Image
                  src={projects[2].mainImage}
                  alt={projects[2].name}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>

            {/* الصف الثاني */}
            <div className="relative overflow-hidden rounded-2xl">
              <Link href={`/projects/${projects[3].id}`}>
                <Image
                  src={projects[3].mainImage}
                  alt={projects[3].name}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <Link href={`/projects/${projects[4].id}`}>
                <Image
                  src={projects[4].mainImage}
                  alt={projects[4].name}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* نسخة الشاشات المتوسطة وتحت */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {/* الصف الأول */}
            <div className="relative overflow-hidden rounded-2xl h-[35vh] sm:h-[40vh]">
              <Link href={`/projects/${projects[1].id}`}>
                <Image
                  src={projects[1].mainImage}
                  alt={projects[1].name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-[35vh] sm:h-[40vh] ">
              <Link href={`/projects/${projects[2].id}`}>
                <Image
                  src={projects[2].mainImage}
                  alt={projects[2].name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </Link>
            </div>

            {/* الصورة الكبيرة في النص */}
            <div className="relative overflow-hidden rounded-2xl h-[50vh] sm:h-[78vh]  lg:h-[90vh] col-span-2">
              <Link href={`/projects/${projects[5].id}`}>
                <Image
                  src={projects[5].mainImage}
                  alt={projects[5].name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </Link>
            </div>

            {/* الصف الأخير */}
            <div className="relative overflow-hidden rounded-2xl h-[35vh] sm:h-[40vh]">
              <Link href={`/projects/${projects[3].id}`}>
                <Image
                  src={projects[3].mainImage}
                  alt={projects[3].name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-[35vh] sm:h-[40vh]">
              <Link href={`/projects/${projects[4].id}`}>
                <Image
                  src={projects[4].mainImage}
                  alt={projects[4].name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* 🔹 السكشن الثاني */}
        <div className="relative overflow-hidden w-full mb-12 rounded-2xl h-[29vh] sm:h-[35vh] md:h-[40vh] lg:h-[60vh]">
          <Link href={`/projects/${projects[0].id}`}>
            <Image
              src={projects[0].mainImage}
              alt={projects[0].name}
              fill
              className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
          </Link>
        </div>

      
{/* 🔹 السكشن التالت — ثابت 3 أعمدة في كل المقاسات */}
<div
  className="
    grid 
    grid-cols-3 
    gap-4 mb-12 
    h-auto
  "
>
  {projects.slice(6, 9).map((project) => (
    <div 
      key={project.id} 
      className="relative overflow-hidden rounded-2xl min-h-[200px] sm:min-h-[250px] md:min-h-[450px]  lg:min-h-[580px]"
    >
      <Link href={`/projects/${project.id}`}>
        <Image
          src={project.mainImage}
          alt={project.name}
          fill
          className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
        />
      </Link>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
