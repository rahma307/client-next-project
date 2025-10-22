"use client";
import Image from "next/image";
import Link from "next/link";
 import { projects } from "../data/projects";
export default function Gallery() {
 

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="mx-auto px-16">

        {/* 🔹 السكشن الأول */}
        <div
          className="
            grid grid-cols-1 
            md:grid-cols-[1fr_1.8fr_1fr] 
            gap-4 mb-12 h-[70vh]
          "
        >
          {/* العمود الأول */}
          <div className="relative overflow-hidden rounded-2xl">
           
             <Link href={`/projects/${projects[1].id}`}>
    <Image
      src={projects[1].mainImage}
      alt={projects[1].name}
      fill
      className="object-contain md:object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
    />
  </Link>

          </div>

          {/* العمود الثاني الطويل */}
          <div className="relative overflow-hidden md:row-span-2 rounded-2xl">
            
              <Link href={`/projects/${projects[5].id}`}>
    <Image
      src={projects[5].mainImage}
      alt={projects[5].name}
      fill
      className="object-contain md:object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
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
      className="object-contain md:object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
    />
  </Link>

          
          </div>

          {/* الصف الثاني */}
          <div className="relative overflow-hidden md:col-start-1 rounded-2xl">
             <Link href={`/projects/${projects[3].id}`}>
    <Image
      src={projects[3].mainImage}
      alt={projects[3].name}
      fill
      className="object-contain md:object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
    />
  </Link>

           
            
          </div>

          <div className="relative overflow-hidden md:col-start-3 rounded-2xl">
              <Link href={`/projects/${projects[4].id}`}>
    <Image
      src={projects[4].mainImage}
      alt={projects[4].name}
      fill
      className="object-contain md:object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
    />
  </Link>

           
          </div>
        </div>

        {/* 🔹 السكشن الثاني */}
        <div className="relative overflow-hidden w-full mb-12 h-[60vh] rounded-2xl">
         
           <Link href={`/projects/${projects[0].id}`}>
    <Image
      src={projects[0].mainImage}
      alt={projects[0].name}
      fill
      className="object-contain md:object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
    />
  </Link>

          
        </div>

        {/* 🔹 السكشن الثالث */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[50vh]">
  {projects.slice(6, 9).map((project) => (
    <div key={project.id} className="relative overflow-hidden rounded-2xl">
      <Link href={`/projects/${project.id}`}>
        <Image
          src={project.mainImage}
          alt={project.name}
          fill
          className="object-contain md:object-cover rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
        />
      </Link>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
