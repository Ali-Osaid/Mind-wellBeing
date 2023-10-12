'use client'
import {  useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "framer-motion"
import Image from "next/image";
import Logo from '../../public/Logo2.png'
import dynamic from "next/dynamic";
import { Button } from "../ui/button";

const navMotion = {
visible:{
  opacity:1,
  transition:{
    when:"beforeChildren",
    staggerChildren:0.15
  },
},
hidden:{
  opacity:0
}
}

const itemMotion = {
  visible:{opacity:1,x:0},
  hidden:{opacity:0,x:-100}
}
export  const Navbar = () => {

  const matches = useMediaQuery('(min-width:1280px)')
  const router = useRouter();
  const [Toggle, setToggle] = useState<boolean>(false)
  const user = useUser();
  
  return (
    <>
      <nav className={` pt-4 relative mx-8 mb-24 justify-between items-center pb-6 font-medium  md:mx-16  lg:mx-32 flex`}>
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          width={250}
          height={4}
          viewBox="0 0  250 4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path d="M2 2L428 2" stroke="#282828" strokeLinecap="round" strokeWidth={1} />
        </svg>
<div className="flex justify-start items-center">
<Image src={Logo} width={70} height={60} alt='logo'/>
  {user.isLoaded && user.isSignedIn ? (
    <div>
      <UserButton  />
    </div>
  ) : (
    <div>
      <Button variant={"ghost"} onClick={() => router.push('/sign-in')}>
        Sign in
      </Button>
    </div>
  )}


</div>
        
       

       


        {/* Title */}
        <h1 className="text-lg font-bold lg:hidden xl:hidden">
          <Link href={'/'} className="">{user.isSignedIn && user.user?.fullName}</Link>
          </h1>
          {/* check if we are on mobile device or not */}
        {matches && (
        <div className="flex gap-12 ">
          <Link href={'/'} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Home</Link>
          <Link href={'/Service'} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Services</Link>
          <Link href={'/Therapist'} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Book Therapist</Link>
        </div>
        )}
        {/*  changing value on based on previousValue */}
        {!matches && (
        <div className="space-y-1.5 cursor-pointer xl:hidden z-50 " 
        onClick={()=> setToggle(prevValue=>!prevValue)}
        >  
          <motion.span
          animate={{rotateZ:Toggle ? 45 :0,y:Toggle? 8:0}} 
          className="block h-0.5 w-8 bg-black">

          </motion.span>
          <motion.span 
          animate={{width:Toggle ? 0:24}}
          className="block h-0.5 w-6 bg-black">

          </motion.span>

          <motion.span 
          animate={{rotateZ:Toggle? -45:0,y:Toggle?-8:0,width:Toggle?32:16}} 
          className="block h-0.5 w-4 bg-black"></motion.span>

        </div>
)}

{Toggle && !matches && (
   <motion.div 
   animate={{opacity:1,x:0}}
   initial={{opacity:0,x:25}}
   className="fixed flex  bg-white top-0 left-0     h-full w-full items-center justify-center">
    <motion.div variants={navMotion}  
    animate="visible"
    initial="hidden"
    className="flex flex-col gap-24 text-lg ">
    <motion.span  variants={itemMotion} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"><Link href={'/'}>Home</Link></motion.span>
   <motion.span  variants={itemMotion} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"><Link href={'/Service'}>Services</Link> </motion.span>
   <motion.span  variants={itemMotion} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"> <Link href={'/Therapist'}>Book Therapist</Link> </motion.span>
    </motion.div>
 </motion.div>  
)}
      </nav>
    </>

  )
}
export default dynamic (() => Promise.resolve(Navbar), {ssr: false})
