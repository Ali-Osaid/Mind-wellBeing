import { Button } from "../ui/button";

export default function Stats() {
  return (
    <div className="px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <div className="text-center">
          <h1 className="text-2xl text-gray-700 md:text-3xl font-semibold mb-6">Meet the Founder and Therapist</h1>
          </div>
        </div>
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <img
            className="object-cover w-full  rounded shadow-lg h-64 md:h-80 lg:h-96"
            src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <p className="text-sm md:text-base max-w-prose mx-auto leading-relaxed">
          Meet <span className="text-red-500 font-bold">Hinaa,</span> Your Experienced Therapist
          <br />
          Hinaa is a dedicated therapist with over 5 years of experience in providing expert counseling and support to individuals and couples. She completed her comprehensive studies in the field of therapy in Dubai, where she honed her skills and gained valuable insights into the diverse needs of her clients.
        </p>
      </div>
      <div className="text-center"> {/* Center the button */}
        <Button variant={"ghost"} className="mt-5">
          See Other Therapist
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
