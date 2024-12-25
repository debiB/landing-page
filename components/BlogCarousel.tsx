import * as React from "react";
import Image from "next/image";
import blog1 from "@/public/blog1.jpeg"
import blog2 from "@/public/blog2.jpeg"

const BlogCarousel = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-center mb-4">Blog</h2>
      {/* <div className="flex items-center space-x-4 overflow-x-scroll scrollbar-hide"> */}
        <div>
          <Image
            src={blog1}
            alt="Makeup Blog"
            className="w-full mb-2 rounded"
          />
          <h3 className="text-xl font-semibold">Makeup Tips</h3>
          <p className="text-gray-600">Learn the best makeup techniques.</p>
        </div>
        <div>
          <Image
            src= {blog2}
            alt="Styling Blog"
            className="w-full mb-2 rounded"
          />
          <h3 className="text-xl font-semibold">Styling Hacks</h3>
          <p className="text-gray-600">Stay stylish with these hacks.</p>
        </div>
      {/* </div> */}
    </section>
  );
};

export default BlogCarousel;