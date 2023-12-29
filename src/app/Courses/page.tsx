
import React from "react";
import CardWithForm from "@/components/custom/Card";
import { Montserrat } from "next/font/google";
import Link from "next/link";


const mont = Montserrat({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

export default function Blogs() {
  return (
    <section className=" flex justify-center shadow-lg min-h-screen">
      <div className=" w-11/12 m-4 rounded-sm bg-white">
        <h1 className={`${mont.className} text-center mt-3 font-bold text-3xl`}>
          Our Main Courses
        </h1>

        <div className="flex items-center flex-wrap mt-20 justify-center gap-4 text-center">
          <CardWithForm
            title= "Bioinformatics"
            description="The study of computer technology used to collect, store, analyze and disseminate biological data and information"
            image= "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_726082_16641860447993001.jpg"
          />
          <CardWithForm
            image="https://cdn.the-scientist.com/assets/articleNo/71249/aImg/50476/60009-ts-deepcell-research-product-blog-408788-800x560-jm-l.jpg"
            title="Cytology"
            description="The study of cells, their origin, structure, function and pathology"
          />
          <CardWithForm
            image="https://www.insideprecisionmedicine.com/wp-content/uploads/2019/01/1502.jpeg"
            title="Proteomics"
            description="The study of the interactions, function, composition, and structures of proteins and their cellular activities"
          />
          <CardWithForm
            image="https://www.huck.psu.edu/assets/uploads/content-images/_640xAUTO_fit_center-center_100_none/badge-ecology-populations.jpg"
            title="Ecology"
            description="The study of the relationships between living organisms, including humans, and their physical environment"
          />
        </div>
        <Link href='/#Home' legacyBehavior>
            <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </section>
  );
}