 import Image from "next/image"
 import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 import logo from "@/assets/logo.jpeg"
 import Menu from "./menu"
 
function Navbar(){
    return(
<div className="flex flex-row-[10%, 80%, 10%] place-items-center justify-around bg-white min-h-[64px]">
  <div>
    <Image src={logo} className=" h-20 w-20 rounded-full" alt="Logo"/>
  </div>
  <div className="hidden sm:flex">
    <Menu />
  </div>
</div>
    )
}


export default Navbar;
