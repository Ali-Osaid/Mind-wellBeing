import Image from "next/image";
import Link from "next/link";

export default function Booking() {
  return (
    <div className="flex justify-center gap-4 mx-5">
      <div className="transition-transform hover:scale-105 ease-in-out ">
        <Link href={'/Therapist'}>
          <div className="">
            <Image
              src={'https://media.istockphoto.com/id/1481631850/photo/counseling-child-and-psychologist-woman-talking-support-and-help-with-problem-mental-health.webp?b=1&s=170667a&w=0&k=20&c=X6AcYfaDkotbPXtBWbN02GqxI7X2B7sio1efne11lm8='}
              alt="HomeAppliance"
              width={500}
              height={300}
              className="rounded-md cursor-pointer"
            />
             <h2 className="text-center pt-2  scroll-m-20 border-b pb-2 lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-xl">
             Counseling <span className="text-green-500 text-sm font-bold">Free</span>
            </h2>
          </div>
        </Link>
      </div>
      <div className=" transition-transform hover:scale-105 ease-in-out">
        <Link href={'/Therapist'}>
          <div className="">
            <Image
              src={'https://media.istockphoto.com/id/1419938890/photo/young-woman-psychologist-smiling-looks-at-the-camera-isolated-on-lilac-studio-background-copy.webp?b=1&s=170667a&w=0&k=20&c=uBvtCG_4xU0QOgleTP6GlDDiUUF_d6Bss7MnUsne1dk='}
              alt="HomeAppliance"
              width={500}
              height={300}
              className="rounded-md cursor-pointer"
            />
           <h2 className="text-center pt-2  scroll-m-20 border-b pb-2 lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-xl">
      Book  Therapist
    </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
