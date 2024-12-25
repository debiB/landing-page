"use client";

import { Card, CardContent } from "@/components/ui/card";
import girl from "@/public/girl.jpeg";
import Image from "next/image";
import { useState } from "react";


// Assuming you're using Material UI for Card

const testimonials = [
  {
    id: 1,
    image: girl,
    text: "Karas work is outstanding! Highly recommend her services.",
    name: "- Jane Doe",
  },
  {
    id: 2,
    image: girl,
    text: "Karas work is outstanding! Highly recommend her services.",
    name: "- John Smith",
  },
  {
    id: 3,
    image: girl,
    text: "Karas work is outstanding! Highly recommend her services.",
    name: "- Alice Johnson",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
   <section className="p-8">
      <div className="text-3xl flex justify-center font-bold text-amber-900 relative mb-10">
        Testimonials
        <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[4%] h-1 bg-amber-900 rounded-md -my-2"></span>
      </div>

      <div className="flex flex-col items-center relative">
        {/* Carousel Item */}
        <div className="carousel-item ">
          <Card className="p-1 mb-2">
            <CardContent className="p-0">
              <Image
                src={testimonials[currentIndex].image}
                alt="girl"
                className="rounded-lg w-full h-full object-cover"
              />
            </CardContent>
          </Card>
          <blockquote className="italic text-center text-gray-600 mb-4">
            {testimonials[currentIndex].text}
          </blockquote>
          <p className="font-semibold text-amber-900 text-center">{testimonials[currentIndex].name}</p>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-[-30px] flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full bg-amber-900 cursor-pointer ${currentIndex === index ? 'bg-opacity-100' : 'bg-opacity-50'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}