import Image from "next/image";
import Gallery from "./component/gallery";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
 
export default function Home() {
  return (
    <>
     
       <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3EEE9] text-primary">
      <h1 className="text-4xl font-bold mb-4">مرحباً بك في موقعنا</h1>
      <p className="text-lg">هنا الصفحة الرئيسية للموقع</p>
    </div>
       
    </>
  );
}
