import Hero from "@/components/custom/hero";
import Navbar from "@/components/custom/navbar";
import Image from "next/image";
import DNA from "@/assets/DNA.png"
// import Blogs from "@/components/custom/blogs";
export default function Home() {
  return (
      <div>
      <Image  className='absolute h-full w-full' src={DNA} alt="/" height= {300} width={300}/>
          
      <Navbar/>
      {/* Navbar */}
      
      <Hero/>
    {/* Main */}          
      </div>
  );
}