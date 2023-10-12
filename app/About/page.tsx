import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import logo from '../../public/Logo2.png'
import AnimationVideo from "@/components/Animation/AnimationVideo";
export default function page() {
  return (
    <div>
        <div className="flex justify-center  p-5 ">
        <p className="text-2xl italic md:text-3xl lg:text-4xl">Your well-being is our mission.</p>
            <hr />
        </div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            
             <Image src={logo} alt="Mind-Wellbeing Logo" width={200} height={130} />
            
          </div>
          <div className="">
            <p className="mb-4 text-base text-gray-700">
            At Mind Well-Being, we're dedicated to promoting mental and emotional health for individuals and families. We understand that life's journey can be filled with both joys and challenges, and it's our mission to provide the support and resources you need to navigate this path with resilience, strength, and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm text-center mx-auto">
    
        <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-none">
        Our Vision
        </h2>
        <p className="text-base text-gray-700 md:text-lg px-4">
        Our vision is a world where mental health is as prioritized and valued as physical health. We believe that everyone deserves access to effective, compassionate, and personalized mental health services. We're committed to making this vision a reality through our holistic approach to well-being.
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
    <div className="relative">
  <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
  <Image
    width={900}
    height={300}
    className="object-cover w-full h-56 sm:h-96"
    src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    alt=""
   
  />
</div>
<div className="max-w-screen-sm text-center mx-auto mt-20 p-5">
    
    <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
    We Listen, We Understand, We Support.
    </h2>
    <p className="text-base text-gray-700 md:text-lg sm:px-4">
    "At Mind-Wellbeing, we listen, understand, and support you. Our compassionate team provides a safe space for you to share your experiences, and we're here to guide you on your path to mental well-being. Your story matters to us, and we're dedicated to helping you through every step of your journey."    </p>
    <hr className="w-full my-8 border-gray-300" />
  </div>
<AnimationVideo/>
        <Footer/>
    </div>
  )
}
