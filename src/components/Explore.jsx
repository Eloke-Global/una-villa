import pic1 from "../assets/explore/1.png"
import pic2 from "../assets/explore/2.png"
import pic3 from "../assets/explore/3.png"
import pic4 from "../assets/explore/4.png"
import pic5 from "../assets/explore/5.png"
import pic6 from "../assets/explore/6.png"
import pic7 from "../assets/explore/7.png"
import pic8 from "../assets/explore/8.png"
import pic9 from "../assets/explore/9.png"
import pic10 from "../assets/explore/10.png"
const Explore = () => {
  return (
    <div className="w-full bg-primary">
        <div className="lg:max-w-[1145px] w-full max-w-[375px] p-5 mx-auto">
            <div className="h-2.5 border-y border-black"></div>
            <div className="lg:pt-[78px] py-[52px] lg:pb-[116px]">
                <div className="flex flex-col text-center">
                    <div className="lg:text-[22px] text-sm merri-bold font-bold">
                        EXPLORE THE CRAFTMENSHIP
                    </div>
                    <div className="text-justify lg:pb-[78px] pb-16 pt-10 lg:pt-6 iplex text-xs lg:text-lg">
                        Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-6">
                        <div className="flex lg:flex-row flex-col gap-6">
                            <div className="flex-1 aspect-square flex items-center justify-center border-2 border-black">
                                <img className="h-full w-auto object-cover" src={pic1} alt="" srcset="" />
                            </div>
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex flex-1 gap-6">
                                    {/* <div className="flex-1 bg-blue-500 flex justify-center items-center"><img src={pic2} alt="" className="h-full object-contain" /></div> */}
                                    <div className="flex-1  flex items-center justify-center border-2 border-black"><img src={pic2} alt="" className="h-full w-auto object-cover"/></div>
                                    <div className="flex-1 flex items-center justify-center border-2 border-black"><img className="h-full w-auto object-cover" src={pic3} alt="" className="h-full w-auto object-cover"/></div>
                                </div>
                                <div className="flex-1 flex items-center justify-center border-2 border-black"><img className="h-full w-auto object-cover" src={pic4} alt="" srcset="" /></div>
                            </div>
                        </div>
                        <div className="hidden lg:flex gap-6 h-[517px]">
                            <div className="w-[269px] flex items-center justify-center border-2 border-black"><img className="h-full w-auto object-cover" src={pic5} alt="" srcset="" /></div>
                            <div className="flex-1 flex items-center justify-center border-2 border-black"><img className="h-full w-auto object-cover" src={pic6} alt="" srcset="" /></div>
                        </div>
                        <div className="hidden lg:flex gap-6 h-[465px] ">
                            <div className="w-[376px]  flex items-center justify-center border-2 border-black"><img className="h-full w-auto object-cover" src={pic7} alt="" srcset="" /></div>
                            <div className="flex-1 flex gap-6 flex-col">
                                <div className="flex-1 flex items-center justify-center border-2 border-black"><img className="h-full w-auto object-cover" src={pic8} alt="" srcset="" /></div>
                                <div className="flex-1 flex items-center justify-center border-2 border-black"><img className="h-full w-auto object-cover" src={pic9} alt="" srcset="" /></div>
                            </div>
                            <div className="w-[450px] flex items-center justify-center border-2 border-black"><img className="h-full w-auto object-cover" src={pic10} alt="" srcset="" /></div>
                        </div>
                        {/* Mobile Only */}
                        <div className="flex flex-col gap-5 lg:hidden">
                            <div className="">
                                <img src={pic10} alt="" />
                            </div>
                            <div className="">
                                <img src={pic6} alt="" />
                            </div>
                            <div className="">
                                <img src={pic7} alt="" />
                            </div>
                        </div>
                        {/* Mobile Only */}
                        <div className="flex lg:hidden gap-5">
                            <div className="flex flex-col flex-1 gap-5">
                                <div className="h-[130px] border border-black">
                                    <img src={pic9} alt="" />
                                </div>
                                <div className="h-[130px] border border-black">
                                    <img src={pic8} alt="" />
                                </div>
                            </div>
                            <div className="flex-1 h-[280px] overflow-hidden border-black border">
                                <img className="" src={pic5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-2.5 border-y border-black"></div>
        </div>
    </div>
  )
}

export default Explore