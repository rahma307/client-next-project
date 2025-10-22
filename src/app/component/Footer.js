// components/Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-200 mb-14">
      <div className="w-[90%] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 py-8">
        {/* الشعار */}
        <div className="flex-shrink-0 w-2/12">
          <span className="text-3xl font-bold text-gray-800">ع</span>
        </div>

     {/* روابط التنقل + إدخال الإيميل */}
<div className="relative flex flex-col justify-between w-4/12">
  {/* روابط التنقل */}
  <div className="flex gap-6 text-gray-700   absolute -top-8 left-1/2 transform -translate-x-1/2">
    <a href="#"  >الرئيسية</a>
    <a href="#"  >المشاريع</a>
    <a href="#"  >التواصل</a>
  </div>

  {/* إدخال الإيميل */}
  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full mt-8">
    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-gray-500 ml-2" />
    <input
      type="email"
      placeholder="Ahmed@gmail.com"
      className="px-3 py-2 outline-none text-gray-700 w-full"
    />
  </div>
</div>


        {/* أيقونات التواصل الاجتماعي */}
        <div className='flex flex-col justify-center'>
            <p className='text-center'> : تابعني علي حساباتي الرسمية</p>
             <div className="flex gap-3  pt-3 justify-center items-center">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#EAEAE9] text-black  "
          >
            <FontAwesomeIcon icon={faEnvelope}  size="lg"/>
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#EAEAE9] text-black  "
          >
            <FontAwesomeIcon icon={faFacebookF}   size="lg"/>
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#EAEAE9] text-black  "
          >
            <FontAwesomeIcon icon={faInstagram}  size="lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#EAEAE9] text-black "
          >
            <FontAwesomeIcon icon={faYoutube}  size="lg" />
          </a>
        </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        جميع الحقوق محفوظة © 2025 أحمد المبيض <br />
        صنع بحب بواسطة Mahmoud Al Sharif
      </div>
    </footer>
  );
}
