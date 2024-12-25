"use client";

import { Card, CardContent } from "@/components/ui/card";
import girl from "@/public/girl.jpeg";
import Image from "next/image";
import qr from "@/public/qr.png";
import { Button } from "./ui/button";
// Assuming you're using Material UI for Card
export default function Qr() {
  return (
    <section className="p-8 py-10">
      <div className="text-3xl flex justify-center font-bold text-amber-900 relative mb-10">
       QR Code
        <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[4%] h-1 bg-amber-900 rounded-md -my-2"></span>
      </div>

      <div className="flex w-full justify-center items-center">
        {/* Carousel Item */}
        <div className="flex items-center">
          <Card className="p-1 mb-2 mr-20">
            <CardContent className="p-0">
              <Image
                src={girl}
                alt="girl"
                className="rounded-lg  w-[400px] h-full object-cover"
              />
            </CardContent>
          </Card>
          <Card className="p-1 mb-2 ml-20">
            <CardContent className="p-0">
              <Image
                src={qr}
                alt="qr"
                className="rounded-lg w-[300px] h-full object-cover"
              />
            </CardContent>
          </Card>
        
        </div>
      </div>
        <div className="flex justify-center w-full">

        <Button className="bg-amber-900 font-bold px-11 py-6 my-10 rounded-lg text-md">Download my QR Code</Button>
        </div>
    </section>
  );
}
