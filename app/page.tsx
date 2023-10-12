import Booking from "@/components/Booking/Booking";
import { FAQ } from "@/components/FAQ/FAQ";
import Feature from "@/components/Feature/Feature";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Review from "@/components/Review/Review";
import Stats from "@/components/Stats/Stats";
import MakeUsSpecial from "@/components/makeUsSpecial/makeUsSpecial";

 
export default function Home() {
  return (
    <div className="bg-slate-50">
      <div className="flex flex-col items-center justify-center">
      <h1 className="scroll-m-20  tracking-tight text-3xl p-5 italic bg-gradient-to-r text-transparent font-normal from-teal-500 to-teal-400 bg-clip-text">
  Greetings From <span className="bg-gradient-to-r text-transparent from-teal-500 to-teal-400 bg-clip-text font-normal">Mind-Wellbeing</span>
</h1>
  <p className="text-sm font-bold pl-20 italic">Your Journey to Inner Peace</p>
</div>
      <Hero/>
      <div className="p-5">
        <hr />
        <hr />
      </div>
      <Stats/>
      <div className="p-5">
        <hr />
        <hr />
      </div>
      <Booking/>
      <div className="p-5">
        <hr />
        <hr />
      </div>
      <FAQ />
      <MakeUsSpecial/>
      <div className="p-5">
        <hr />
        <hr />
      </div>
      <Feature/>
      <div className="p-5">
        <hr />
        <hr />
      </div>
      <NewsLetter/>
      <Review/>
      <div className="p-5">
        <hr />
        <hr />
      </div>
      <Footer/>
    </div>
  )
}