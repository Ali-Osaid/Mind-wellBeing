export default function Review() {
  return (
    <>
    <section className="text-neutral-700 dark:text-neutral-300 p-10">
  <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
  <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What clients saying
        </h1>

        <div className="flex justify-center mx-auto mt-6 mb-5">
            <span className="inline-block w-40 h-1 bg-teal-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-teal-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-teal-500 rounded-full"></span>
        </div>

  </div>

  {/* <!--First Testimonial--> */}
  <div className="grid gap-6 text-center md:grid-cols-3">
    <div>
      <div
        className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
        <div
          className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            "I'm thrilled with the exceptional service provided by Mind-Wellbeing They exceeded my expectations and delivered results beyond belief!"
          </p>
        </div>
      </div>
    </div>

    {/* <!--Second Testimonial--> */}
    <div>
      <div
        className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
        <div
          className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            "I can't thank Hiraa enough for their compassionate guidance. Their therapy sessions have been life-changing for me."
          </p>
        </div>
      </div>
    </div>

    {/* <!--Third Testimonial--> */}
    <div>
      <div
        className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
        <div
          className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            hiraa is an exceptional listener and empathetic therapist. Their support has made a significant difference in my mental health journey."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
