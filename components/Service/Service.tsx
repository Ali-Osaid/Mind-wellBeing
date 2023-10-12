import Link from "next/link";
import { Button } from "../ui/button";
import logo from '../../public/Logo2.png'
import Image from "next/image";
export default function Content() {
  return (
    <div className="bg-slate-50  px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center p-4">
        <p className="text-base text-gray-700 md:text-lg pb-2 italic">
        Your Path to Well-Being
        </p>
        <Image src={logo} alt="Mind-WellBeing Logo" width={200} height={130} />
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 grid-cols-1">
        <Link href={'/Therapist'} className="duration-300  bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Individual counseling</h6>
            <p className="text-sm text-gray-900">
            Individual counseling at Mind-Wellbeing offers personalized support to help you overcome life's challenges and enhance your emotional well-being. Our experienced therapists provide a safe and confidential space for you to explore your thoughts, emotions, and concerns. Whether you're facing stress, anxiety, depression, or simply seeking personal growth,            </p>
          </div>
        </Link>
        <Link  href={'/Therapist'} className="duration-300  bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Couples counseling</h6>
            <p className="text-sm text-gray-900">

            Couples counseling at Mind-Wellbeing is a valuable resource for partners looking to strengthen their relationship. Our expert therapists provide a supportive and confidential environment where couples can work through conflicts, improve communication, and build a healthier and more fulfilling p            </p>
          </div>
        </Link>
        <Link   href={'/Therapist'} className="duration-300  bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Family therapy</h6>
            <p className="text-sm text-gray-900">
            Family therapy at Mind-Wellbeing is a constructive and supportive space for families seeking to improve their dynamics and relationships. Our experienced therapists work with family members to address conflicts, enhance communication, and promote understanding within the family unit            </p>
          </div>
        </Link>
        <Link  href={'/Therapist'} className="duration-300  bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">   Group therapy </h6>
            <p className="text-sm text-gray-900">
            Group therapy at Mind-Wellbeing provides a dynamic and communal setting for individuals to address shared concerns and receive support. Led by our skilled therapists, these sessions encourage participants to connect, share experiences, and work together to overcome common challenges. 
            </p>
          </div>
        </Link>
        <Link  href={'/Therapist'} className="duration-300  bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Child counseling</h6>
            <p className="text-sm text-gray-900">
              Child counseling at Mind-Wellbeing is a specialized service designed to help children navigate emotional challenges and develop important coping skills. Our experienced child therapists create a safe and nurturing environment for young individuals to express themselves, manage stress, and build resilience. 
            </p>
          </div>
        </Link>
        <Link href={'/Therapist'} className="duration-300  bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Career counseling</h6>
            <p className="text-sm text-gray-900">
            Career counseling at Mind-Wellbeing is your pathway to professional success and personal fulfillment. Our experienced career counselors are here to guide you through the intricate journey of career development. We provide a supportive and tailored approach to help you make informed career decisions, set meaningful goals, and overcome any professional challenges you may encounter.            </p>
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Button className="bg-teal-500 hover:bg-teal-400">
          <Link href={''}>Book Therapist</Link>
        </Button>
      </div>
    </div>
  );
}
