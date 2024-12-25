import * as React from "react";
import { WandSparkles } from "lucide-react";
const Services = () => {
  return (
    <section className="p-8 bg-gray-">
      <div className="text-3xl flex justify-center font-bold text-amber-900 relative mb-10">
       Our Services
        <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[4%] h-1 bg-amber-900 rounded-md -my-2"></span>
      </div>
      <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-6 w-8/12">
        <div className="relative border-4 p-4 rounded-lg border-amber-900">
    {/* Icon on the border */}
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full">
      <WandSparkles size={30} className="text-amber-900"/>
    </div>

    {/* Content */}
    <h3 className="text-xl font-semibold text-center text-amber-900 my-4">
      Makeup
    </h3>
    <p className="text-gray-600 text-sm text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>

         <div className="relative border-4 p-4 rounded-lg border-amber-900">
    {/* Icon on the border */}
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full">
      <WandSparkles size={30} className="text-amber-900"/>
    </div>

    {/* Content */}
    <h3 className="text-xl font-semibold text-center text-amber-900 my-4">
      Styling
    </h3>
    <p className="text-gray-600 text-sm text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
