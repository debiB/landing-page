import * as React from "react";
import Image from "next/image";
import prod1 from "@/public/product1.jpeg"
import prod2 from "@/public/product2.jpg"
import { Button } from "./ui/button";
const Products = () => {
  return (
    <section className="p-8">
      <div className="text-3xl flex justify-center font-bold text-amber-900 relative mb-10">
       Products
        <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[4%] h-1 bg-amber-900 rounded-md -my-2"></span>
      </div>
      <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-6 w-8/12">
        <div className="border p-4 rounded">
          <Image src={prod1} alt="Makeup Kit" className="w-full mb-2" />
          <h3 className="text-xl font-semibold">Makeup Kit</h3>
             <p className="text-gray-500 text-sm my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
              <Button className="w-full bg-white text-amber-900 border-2 border-amber-900">
  $1400
</Button>
        </div>
        <div className="border p-4 rounded flex flex-col justify-between h-full">
  <Image src={prod2}  alt="Makeup Kit" className="mb-2" />
  <div>
    <h3 className="text-xl font-semibold">Clothes</h3>
    <p className="text-gray-500 text-sm my-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
  <Button className="w-full bg-white text-amber-900 border-2 border-amber-900 mt-auto">
    $1400
  </Button>
</div>

      </div>
        </div>
    </section>
  );
};

export default Products;
