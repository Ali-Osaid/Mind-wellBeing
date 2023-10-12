'use client'
import Lottie from "lottie-react"
import Animation from '../../public/AnimationData.json'
export default function AnimationVideo() {
  return (
    <div className="lg:w-[1000px] mx-auto">
    <Lottie animationData={Animation}  />
    </div>
  )
}
