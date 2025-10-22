"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown, Languages } from "lucide-react";

export default function Navbar() {
  // حالات اللغة والقائمة
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <nav className="bg-white py-4 px-16 flex justify-between items-center">
      {/* اللوغو */}
      <div className="text-3xl font-bold text-[#594534] tracking-wider pl-2">
        غ
      </div>

      {/* روابط التنقل */}
      <div className="flex items-center gap-6 pr-2">
        <Link href="#" className="text-[#594534]">
          الرئيسية
        </Link>
        <Link href="#" className="text-[#594534]">
          المشاريع
        </Link>
        <Link href="#" className="text-[#594534]">
          التواصل
        </Link>

        {/* قائمة اللغة */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 text-gray-800   "
          >
            <Languages size={20} />
            <span className="text-sm font-medium">
              {language === "en" ? "EN" : "AR"}
            </span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* القائمة المنسدلة */}
          {open && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-2 w-28">
              <button
                onClick={() => handleSelect("en")}
                className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => handleSelect("ar")}
                className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
              >
                العربية
              </button>
            </div>
          )}
        </div>

        {/* الزر */}
        <button
          className="relative flex items-center justify-center gap-2 bg-[#594534] text-white 
          rounded-[9.84px] hover:opacity-90 transition px-[18px] py-[10px]
          min-w-[160px] md:min-w-[190px]"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-sm md:text-base lg:text-lg"
          />

          <span
            className="whitespace-nowrap font-[Rubik] font-[400]
            text-[13px] sm:text-[14.5px] md:text-[15.75px]
            leading-[18.9px] tracking-[-0.49px]"
          >
            احجز جلسة سريعة
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
    </nav>
  );
}
