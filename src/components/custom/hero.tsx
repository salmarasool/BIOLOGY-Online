import { Link } from "lucide-react";
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="w-full h-screen p-60">
        <h1 className="max-w-[1240px] mx-auto py-1 flex justify-center items-center text-[40px] text-slate-300 font-bold sm:max-w-[80%]">
          Welcome to BIOLOGY Online
        </h1>
      <div className='flex items-center justify-between max-w-[330px] m-auto'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
            </div>
      </div>
  </div>
  )
};
