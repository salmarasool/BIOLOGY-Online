import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import DNA from '@/assets/DNA.png'



export default function Home() {
  return (
    <div className="absolute w-full h-full p-60">
      <h1 className="max-w-[1240px] mx-auto py-6 flex justify-center items-center text-[40px] text-slate-300 font-bold sm:max-w-[80%]">
        Welcome to BIOLOGY Online
      </h1>
    <div className='flex items-center justify-between max-w-[330px] m-auto'>
        <a
          href='https://www.linkedin.com/in/clint-briley-50056920a/'
          target='_blank'
          rel='noreferrer'
        >
          <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaLinkedinIn />
          </div>
        </a>
        <a
          href='https://github.com/fireclint'
          target='_blank'
          rel='noreferrer'
        >
          <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaGithub />
          </div>
        </a>
        <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiOutlineMail />
        </div>
     </div>
     </div>
  )};