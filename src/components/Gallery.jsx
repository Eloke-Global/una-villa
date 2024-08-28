import React from 'react'
import Img1 from "../assets/gallery/Group shot - CHICKEN CHEESE PINWHEEL, JERK CHICKEN &  CHICKEN TIKKA.png"
import Img4 from "../assets/gallery/Group Shot - Coffee, Margherita Pizza & Hummus Bread.png"
import Img2 from "../assets/gallery/IMG_5945.png"
import Img3 from "../assets/gallery/IMG_6715.png"
const Gallery = () => {
  return (
    <div className="bg-primary w-full" id = "gallery">
        <div className="mx-auto w-full max-w-[345px] lg:max-w-[1145px] lg:py-[104px] py-9">
            <div className="merri-bold uppercase tracking-[10px] text-center lg:text-base text-xs">
                Gallery
            </div>
            <div className="h-[1px] bg-prim-darkGray my-10"></div>
            <div className="tracking-[2px] leading-normal iplex text-xs lg:text-base lg:p-0 text-center">
                Once, sharing a meal was the heart of friendship, where stories flowed and conversations meandered over coffee. At Una Villa, we honor this tradition with comforting cuisine and genuine hospitality. Join us to relive these cherished moments, share your stories, and savor the warmth of true connection. Celebrate the beauty of everyday togetherness with us.
            </div>
            <div className="lg:flex lg:flex-row hidden px-4 pt-28 gap-6">
                <div className="flex-1 flex flex-col gap-6">
                    <div className="h-[840px] w-full" style={{backgroundImage:`url(${Img1})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
                    <div className="h-[450px] w-full" style={{backgroundImage:`url(${Img2})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <div className="h-[450px] w-full" style={{backgroundImage:`url(${Img3})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
                    <div className="h-[840px] w-full" style={{backgroundImage:`url(${Img4})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
                </div>
            </div>
            <div className="flex flex-col lg:hidden gap-4 pt-8">
                <div className="h-[505px]" style={{backgroundImage:`url(${Img1})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
                <div className="h-[505px]" style={{backgroundImage:`url(${Img4})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
                <div className="h-[267px]" style={{backgroundImage:`url(${Img2})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
                <div className="h-[267px]" style={{backgroundImage:`url(${Img3})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
            </div>
        </div>
        <div className="h-1 lg:h-2.5 border-y border-prim-darkGray mx-auto max-w-[365px] lg:max-w-[1145px]"></div>
    </div>
  )
}

export default Gallery