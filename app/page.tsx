// import Image from "next/image";


import BuisnessHours from "@/components/BuisnessHours";
import ContactCard from "@/components/ContactCard";
import ContactUs from "@/components/ContactUs";
import CreateCard from "@/components/CreateCard";
import Products from "@/components/Products";
import Qr from "@/components/QR";
import Services from "@/components/Services";
import Testimonials from "@/components/Testmonials";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import blog1 from "@/public/blog1.jpeg";
import blog2 from "@/public/blog2.jpeg";
import first from "@/public/first_craousel.webp";
import second from "@/public/second_craousel.jpeg";
import { Mail, Phone, Cake, Locate } from "lucide-react";
import Image from "next/image";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import frame8 from "@/public/Frame 8.svg"
import frame7 from "@/public/Frame 7.svg"
import frame6 from "@/public/Frame 6.svg"
import frame5 from "@/public/Frame 5.svg"
import frame4 from "@/public/Frame 4.svg"
import frame2 from "@/public/Frame 2.svg"
import frame3 from "@/public/Frame 3.svg"
import HeroSection from "@/components/Hero";
import image1 from "@/public/Frame 1.svg"
export default function Home() {
  const carouselItems = [
    { src: first, alt: "First Carousel Image" },
    { src: second, alt: "Second Carousel Image" },
  ];
const carouselItems2 = [
    { src: blog1, alt: "First Carousel Image", text1:"Make up", text2: "Discover the art of beauty with expertly crafted makeup tailored to your style." },
    { src: blog2, alt: "Second Carousel Image", text1:"Make up", text2: "Discover the art of beauty with expertly crafted makeup tailored to your style."},
  ];
  return (
    <div className="overflow-x-hidden">
      <div className="absolute bottom-[690px] left-96"><div className="flex flex-col items-start space-y-3"><p className="text-amber-900 font-bold text-5xl">Nara Smith</p><p className="text-gray-500  text-xl">Make up artist</p></div></div> 
      <HeroSection/>
    <div className="relative text-center mx-auto text-gray-500">
  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src={image1} // Replace with your image path
      alt="Background"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      quality={100}
      priority
    />
  </div>
  {/* Text Content */}
  <p className="relative z-10 w-6/12 mx-auto">
    Discover the art of beauty with expertly crafted makeup tailored to your
    style. From weddings to special events or everyday glam, I’ll help you
    look and feel your absolute best. Using premium products and techniques,
    I create flawless, long-lasting looks for any occasion. Your unique
    features are my inspiration, ensuring every detail enhances your natural
    beauty. Book your session today and step into confidence like never
    before!
  </p>

  {/* Contact Cards */}
  <div className="flex justify-center mt-10 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <ContactCard
        Icon={Mail}
        primaryText="Example@gmail.com"
        secondaryText="Email"
      />
      <ContactCard
        Icon={Phone}
        primaryText="+251565555"
        secondaryText="Mobile Number"
      />
      <ContactCard
        Icon={Cake}
        primaryText="5th June, 2002"
        secondaryText="Date of Birth"
      />
      <ContactCard
        Icon={Locate}
        primaryText="+251565555"
        secondaryText="Mobile Number"
      />
    </div>
  </div>

  {/* Social Media Icons */}
  <div className="flex justify-center md:space-x-20 space-x-5 text-amber-900 my-10 md:my-12 relative z-10">
    <FaFacebook className="w-7 h-7 md:w-10 md:h-10" />
    <FaWhatsapp className="w-7 h-7 md:w-10 md:h-10" />
    <FaLinkedin className="w-7 h-7 md:w-10 md:h-10" />
    <FaInstagram className="w-7 h-7 md:w-10 md:h-10" />
    <FaTwitter className="w-7 h-7 md:w-10 md:h-10" />
  </div>
</div>

      <div className="relative">
      {/* Background Image */}
          {/* Background Image */}
     
      {/* Overlay Content */}
      
      <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={frame2} // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="text-3xl flex justify-center font-bold text-amber-900 relative mb-10">
        Gallery
        <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[4%] h-1 bg-amber-900 rounded-md -my-2"></span>
      </div>
      <div className="w-full flex justify-center my-9">
        <Carousel className="w-7/12">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
     

      {/* Products Component */}

    {/* Components */}
   <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={frame8} // Replace with the path to your background image
          alt="Background"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image scales properly
        />
      </div>
      <Products />
     </div>
     <div className="relative min-h-screen">
    {/* Background Image */}
    <div className="absolute inset-0 -z-10">
      <Image
        src={frame3} // Update this path to match your file
        alt="Background"
        layout="fill" // Ensures the image fills the parent container
        objectFit="cover" // Makes the image cover the container without distortion
      />
    </div>
   <div className="relative p-8">
      <Services />
    
      <div className="relative z-10">
        <div className="text-3xl flex justify-center font-bold text-amber-900 relative">
          Blog
          <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[4%] h-1 bg-amber-900 rounded-md -my-2"></span>
        </div>
        <div className="w-full flex justify-center py-9">
          <Carousel className="w-3/12">
            <CarouselContent>
              {carouselItems2.map((item, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-0">
                      <div className="w-full rounded p-4">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          className="w-full mb-2 rounded"
                        />
                        <h3 className="text-xl font-semibold">{item.text1}</h3>
                        <p className="text-gray-600">{item.text2}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
    </div>
    </div>
  
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={frame4} // Replace with the path to your background image
          alt="Background"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image scales properly
        />
      </div>

      {/* Testimonials Component */}
      <Testimonials />
    </div>


<div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={frame5} // Replace with the path to your background image
          alt="Background"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image scales properly
        />
      </div>
      <Qr/>
      </div>
      <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={frame6} // Replace with the path to your background image
          alt="Background"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image scales properly
        />
      </div>
      <BuisnessHours/>
      </div>
      <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={frame7} // Replace with the path to your background image
          alt="Background"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image scales properly
        />
      </div>
      <ContactUs/>
      <CreateCard/>
      </div>
    </div>
    
  );
}