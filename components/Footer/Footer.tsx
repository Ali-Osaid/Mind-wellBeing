import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/Logo2.png'
import {Instagram,Facebook} from 'lucide-react'
import mindWellText from '../../public/MindWellText.png'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
            <div className='flex justify-center items-center'>
                <Image width={200} height={200}  className="" src={Logo} alt=""/>
                <Image width={170} height={200}  className="" src={mindWellText} alt=""/>
            </div>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
                <Link href={'/'} className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </Link>
                
                <Link href={'/About'} className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> About </Link>
                

                <Link href={'/Privacy'} className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Privacy </Link>

            </div>

        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2021. All Rights Reserved. Develope by Ali Osaid</p>

            <div className="flex -mx-2">
                <Link href={'/'} className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-blue-400" aria-label="Reddit">
                    <Instagram  size={20}/>
                </Link>

        
                <Link href={''}className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                  <Facebook size={20}/>
                </Link>
            </div>
        </div>
    </div>
</footer>
  )
}
