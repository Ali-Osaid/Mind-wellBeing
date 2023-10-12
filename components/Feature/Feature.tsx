import Image from 'next/image';
import Logo from '../../public/Logo2.png'
export default function Feature ()  {
    return (
      <div className="px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
         
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
       
            Embark on Your Healing Journey
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          At Mind Well, we're dedicated to helping you find emotional well-being. Our team of diverse therapists offers specialized support for stress, anxiety, depression, and personal growth. Begin your transformative journey with us today.
          </p>
        </div>
        <div className="max-w-lg space-y-3 mx-auto lg:max-w-xl">
          <div className="flex items-center p-2 duration-300  border rounded shadow  hover:scale-110">
            <div className="mr-2">
         
              <Image src={Logo} alt='Logo-Picture' width={30} height={40}/>
            </div>
            <span className="text-gray-800">
              Change the world by being yourself.
            </span>
          </div>
          <div className="flex items-center p-2 duration-300  border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
            <Image src={Logo} alt='Logo-Picture' width={30} height={40}/>
            </div>
            <span className="text-gray-800">Die with memories, not dreams.</span>
          </div>
          <div className="flex items-center p-2 duration-300  border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
            <Image src={Logo} alt='Logo-Picture' width={30} height={40}/>
            </div>
            <span className="text-gray-800">What we think, we become.</span>
          </div>
          <div className="flex items-center p-2 duration-300  border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
            <Image src={Logo} alt='Logo-Picture' width={30} height={40}/>
            </div>
            <span className="text-gray-800">
              Be so good they can’t ignore you.
            </span>
          </div>
          <div className="flex items-center p-2 duration-300  border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
            <Image src={Logo} alt='Logo-Picture' width={30} height={40}/>
            </div>
            <span className="text-gray-800">
              Simplicity is the ultimate sophistication.
            </span>
          </div>
          <div className="flex items-center p-2 duration-300  border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
            <Image src={Logo} alt='Logo-Picture' width={30} height={40}/>
            </div>
            <span className="text-gray-800">
              Yesterday you said tomorrow. Just do it today.
            </span>
          </div>
        </div>
      </div>
    );
  };