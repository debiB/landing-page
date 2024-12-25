import Image from "next/image";
import cover from "@/public/cover_image.jpg"
import girl from "@/public/girl.jpeg"
const HeroSection = () => {
  return (
     <section className="relative w-full h-[45vh]">
      {/* Background Image using next/image */}
      <div className="absolute top-0 left-0 w-full h-[35vh] z-0 overflow-hidden rounded-3xl rotate-[5deg] -mt-20 ">
        <Image 
          src={cover}
          alt="Cover Image" 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
      </div>

      {/* Avatar Container */}
      <div className="absolute bottom-[150px] left-20 w-40 h-40 rounded-lg border-4 border-white overflow-hidden z-10">
        <Image 
          className="w-full h-full object-cover" 
          src={girl}
          alt="Avatar" 
          width={300}  // 24 * 4 = 96px (w-24 class equivalent size)
          height={300}  // Same as width to maintain square aspect
        />
      </div>

      {/* Hero Content */}
  
    </section>
  );
};

export default HeroSection;
