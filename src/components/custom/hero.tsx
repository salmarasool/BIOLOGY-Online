import Image from "next/image";
import { ArrowRightSquare } from "lucide-react";
import image from "@/assets/DNA.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
<main className=" relative flex items-center justify-center min-h-[600px]">
      <div className="flex flex-col gap-7 items-center justify-center ">
        <h1 className=" text-[40px] text-white font-bold">
          Welcome to BIOLOGY Online
        </h1>
        <Button>
          <ArrowRightSquare className="mr-2 h-4 w-4" />Learn More
        </Button>
      </div>
      <Image className="absolute w-full h-[600px] z-[-1]" src={image} alt="Bg"/>
    </main>
  )
}
