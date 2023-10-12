import Image from "next/image";

export default function Hero() {
  return (
    <div className="px-4 mt-20 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        {/* On small screens, display image first */}
        <div className="flex flex-col justify-center lg:order-2 py-4 w-full">
          <Image
          priority
            width={700}
            height={200}
            className="object-cover rounded shadow-lg "
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center lg:order-1">
          <div className="max-w-xl mb-6 shadow-lg">
            
              <blockquote className="mt-6 border-l-2 pl-6 italic p-5">
                "Life is a journey with ups and downs, and sometimes, we all need help.
                Life can be tough. It can make us feel lost, worried, or stuck. But remember, asking for help is a sign of strength, not weakness. Whether you're dealing with personal problems, issues in your relationships, or just feeling overwhelmed by daily life, our therapy services are here to support you as you work towards feeling better and understanding yourself".
              </blockquote>
            
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 shadow-lg">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 text-lg font-semibold leading-5">
                  Why Therapy?
                </h6>
                <ul className="my-3 ml-3 list-disc md:ml-6 md:my-6">
                  <li className="text-xs md:text-sm">Therapy lifts your spirits when you're down.</li>
                  <li className="text-xs md:text-sm">We're here to help you find happiness.</li>
                  <li className="text-xs md:text-sm">It helps you understand yourself and improve relationships.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 text-lg font-semibold leading-5">
                  Is Therapy Safe?
                </h6>
                <ul className="my-3 ml-3 list-disc md:ml-6 md:my-6">
                  <li className="text-xs md:text-sm">Therapy is a safe space where you can express yourself without fear.</li>
                  <li className="text-xs md:text-sm">There's no judgment in therapy – just understanding and support.</li>
                  <li className="text-xs md:text-sm">You're not alone; we're here to help and make you feel comfortable.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
