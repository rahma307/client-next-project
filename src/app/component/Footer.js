"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


import { useLanguage } from "../hooks/useLanguage";
import en from "../locales/en.json";
import ar from "../locales/ar.json";
import logo from "../../../public/images/logo (2).png"
import Image from "next/image";
export default function Footer() {
    const { language } = useLanguage();
  const t = language === "ar" ? ar : en;

  const pathname = usePathname();

  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      {/* الجزء العلوي */}
      <div className="w-[90%] mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 border-b border-gray-200 pb-10">
        {/* الشعار */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
<div className="text-3xl font-bold text-primary tracking-wider pl-2 flex items-center">
  <Image
    src={logo}       // ← مسار الصورة
    alt="Company Logo"    // ← وصف بديل
    width={80}           // ← عرض الصورة
    height={20}           // ← ارتفاع الصورة
    className="object-contain" // ← تحافظ على تناسب الصورة
  />
</div>        </div>

        {/* روابط التنقل + الإيميل */}
        <div className="flex flex-col items-center w-full md:w-4/12">
          {/* روابط التنقل */}
          <div className="flex gap-6 text-primary mb-5 font-medium">
            <Link
              href="/"
              className={`px-2 py-1 rounded-md transition ${
                pathname === "/" 
              }`}
            >
               {t.home}
            </Link>
            <Link
              href="/projects"
              className={`px-2 py-1 rounded-md transition ${
                pathname.startsWith("/projects")
                  
              }`}
            >
               {t.projects}
            </Link>
            <Link
              href="/contact"
              className={`px-2 py-1 rounded-md transition ${
                pathname === "/contact"
                
              }`}
            >
              {t.contact}
            </Link>
          </div>

          {/* إدخال الإيميل */}
          <div className="flex items-center border border-secondary rounded-lg overflow-hidden w-full max-w-[280px] md:max-w-none">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-5 h-5 text-secondary ml-2"
            />
            <input
              type="email"
              placeholder="Ahmed@gmail.com"
              className="px-3 py-2 outline-none text-secondary w-full text-sm md:text-base"
            />
          </div>
        </div>

        {/* السوشيال ميديا (تظهر فقط على الشاشات الكبيرة) */}
        <div className="hidden md:flex flex-col items-center mt-3">
          <p className="text-primary mb-3 font-medium">
          {t.followMe}
           </p>
          <div className="flex gap-3 justify-center items-center flex-wrap">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-lite-white text-black hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-lite-white text-black hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-lite-white text-black hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-lite-white text-black hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="mt-6 text-center text-gray-400 text-sm leading-relaxed">
        <p>{t.rights}</p>
        <p>{t.madeWithLove}</p>

        {/* خط فاصل */}
        <div className="border-t border-gray-200 mt-6 pt-6 w-[80%] mx-auto"></div>

        {/* السوشيال ميديا (تظهر فقط على الشاشات الصغيرة) */}
        <div className="flex md:hidden flex-col items-center mt-3">
          <p className="text-primary mb-3 font-medium">
          {t.followMe}
          </p>
          <div className="flex gap-3 justify-center items-center flex-wrap">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-lite-white text-black hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-lite-white text-black hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-lite-white text-black hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-lite-white text-black hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
