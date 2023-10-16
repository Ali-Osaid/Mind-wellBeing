import Image from "next/image";
import Link from "next/link";
import Picture2 from '../../public/Picture2.jpeg'
import Picture3 from '../../public/Picture3.jpeg'

export default function Booking() {
  return (
    <div className="flex justify-center gap-4 mx-5">
      <div className="transition-transform hover:scale-105 ease-in-out ">
        <Link href={'/Therapist'}>
          <div className="">
            <Image
              src={Picture2}
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
              src={Picture3}
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
