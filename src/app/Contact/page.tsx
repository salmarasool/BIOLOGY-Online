import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import contact from '@/assets/contact.jpeg';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen items-center'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <h2 className='py-4 text-3xl font-extrabold'>Get In Touch</h2>
          <div className='col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-6 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={contact}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 text-3xl font-extrabold'>Salma Rasool</h2>
                <p>A Biologist and Researcher</p>
                <p className='py-4'>
                  We are available for online teaching of Biology.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>You can find us on</p>
                <div className='flex items-center justify-around py-4'>
                  <a
                    href='https://www.linkedin.com/in/salma-rasool-15abb7246/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/salmarasool'
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
                <Link href='/#Home' legacyBehavior>
                      <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
