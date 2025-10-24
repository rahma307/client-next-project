"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown, Languages } from "lucide-react";
import logo from "../../../public/images/logo (2).png"
import Image from "next/image";

import { useLanguage } from "../hooks/useLanguage";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

export default function Navbar() {
 const { language, changeLanguage } = useLanguage();
const t = language === "ar" ? ar : en;

  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  

  return (
    <nav className="bg-white py-4 px-6 md:px-16 flex justify-between items-center relative shadow-sm">
    {/* اللوغو */}
<div className="text-3xl font-bold text-primary tracking-wider pl-2 flex items-center">
  <Image
    src={logo}       // ← مسار الصورة
    alt="Company Logo"    // ← وصف بديل
    width={80}           // ← عرض الصورة
    height={20}           // ← ارتفاع الصورة
    className="object-contain" // ← تحافظ على تناسب الصورة
  />
</div>

      {/* روابط سطح المكتب */}
      <div className="hidden md:flex items-center gap-6 pr-2">
        <Link
          href="/"
          className={`text-primary px-3 py-2 rounded-md transition ${
            pathname === "/" ? "bg-[#F3EEE9]" : "hover:bg-[#F3EEE9]"
          }`}
        >
           {t.home}
        </Link>

        <Link
          href="/projects"
          className={`text-primary px-3 py-2 rounded-md transition ${
            pathname.startsWith("/projects")
              ? "bg-[#F3EEE9]"
              : "hover:bg-[#F3EEE9]"
          }`}
        >
          {t.projects}
         </Link>

        <Link
          href="/contact"
          className={`text-primary px-3 py-2 rounded-md transition ${
            pathname === "/contact" ? "bg-[#F3EEE9]" : "hover:bg-[#F3EEE9]"
          }`}
        >
          {t.contact}
        </Link>

        {/* اختيار اللغة */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 text-gray-800"
          >
            <Languages size={20} />
            <span className="text-sm font-medium text-primary">
              {language === "en" ? "EN" : "AR"}
            </span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-200  text-primary${
                langOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-2 w-28 z-50 text-primary">
              <button
               onClick={() => changeLanguage("en")}

                className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("ar")}

                className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
              >
                العربية
              </button>
            </div>
          )}
        </div>

        {/* الزر — بنفس الديزاين اللي انتي عملتيه */}
        <button
          className="relative flex items-center justify-center gap-2 bg-primary text-white 
          rounded-[9.84px] hover:opacity-90 transition px-[18px] py-[10px]
          min-w-[160px] md:min-w-[190px]"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-base" />
          <span className="font-[Rubik] text-[15px] leading-[18.9px] tracking-[-0.49px]">
            {t.book}
          </span>
          <div className="flex items-center justify-center ml-3 relative">
            <div
              className="absolute"
              style={{
                width: "13.78px",
                height: "13.78px",
                borderRadius: "50%",
                backgroundColor: "#F5A606",
                opacity: 0.5,
              }}
            ></div>
            <div
              style={{
                width: "9.84px",
                height: "9.84px",
                borderRadius: "50%",
                backgroundColor: "#F5A606",
                position: "relative",
              }}
            ></div>
          </div>
        </button>
      </div>

      {/* زر القائمة للموبايل */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden text-primary text-2xl cursor-pointer"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* القائمة الجانبية (من الشمال) */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="text-gray-700 text-2xl mb-6 cursor-pointer"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="flex flex-col gap-4 text-primary">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`px-3 py-2 rounded-md ${
              pathname === "/" ? "bg-lite-white" : "hover:bg-lite-white"
            }`}
          >
             {t.home}
           </Link>

          <Link
            href="/projects"
            onClick={() => setMenuOpen(false)}
            className={`px-3 py-2 rounded-md ${
              pathname.startsWith("/projects")
                ? "bg-lite-white"
                : "hover:bg-lite-white"
            }`}
          >
           {t.projects}
           </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`px-3 py-2 rounded-md ${
              pathname === "/contact" ? "bg-lite-white" : "hover:bg-lite-white"
            }`}
          >
             {t.contact}
          </Link>

          {/* اللغة في الموبايل */}
          <div className="mt-4 text-primary">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2  "
            >
              <Languages size={20} />
              <span className="text-sm font-medium text-primary">
                {language === "en" ? "EN" : "AR"}
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  langOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langOpen && (
              <div className="mt-2 bg-white shadow-md rounded-lg py-2 w-28">
                <button
                 onClick={() => changeLanguage("en")}

                  className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100 text-primary"
                >
                  English
                </button>
                <button
                 onClick={() => changeLanguage("ar")}

                  className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100 text-primary"
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
