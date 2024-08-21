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
            <div className="h-2.5 border-y border-prim-darkGray"></div>
            <div className="lg:pt-[78px] py-[52px] lg:pb-[116px]">
                <div className="flex flex-col text-center">
                    <div className="lg:text-[22px] text-sm merri-bold font-bold">
                        EXPLORE THE CRAFTSMENSHIP
                    </div>
                    <div className="text-justify lg:pb-[78px] pb-16 pt-10 lg:pt-6 iplex text-xs lg:text-lg">
                        Discover our serene garden dining area, a perfect retreat for enjoying your meal in a peaceful setting. Surrounded by lush greenery and vibrant flowers, our outdoor space offers an enchanting atmosphere that enhances your dining experience. Whether you`re here for a romantic evening or a casual brunch, our garden provides a tranquil escape.
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-6">
                        <div className="flex lg:flex-row flex-col gap-6">
                            <div className="flex-1 aspect-square flex items-center justify-center ">
                                <img className="h-full w-auto object-cover" src={pic1} alt="" />
                            </div>
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex flex-1 gap-6">
                                    {/* <div className="flex-1 bg-blue-500 flex justify-center items-center"><img src={pic2} alt="" className="h-full object-contain" /></div> */}
                                    <div className="flex-1  flex items-center justify-center "><img src={pic2} alt="" className="h-full w-auto object-cover"/></div>
                                    <div className="flex-1 flex items-center justify-center "><img className="h-full w-auto object-cover" src={pic3} alt=""/></div>
                                </div>
                                <div className="flex-1 flex items-center justify-center "><img className="h-full w-auto object-cover" src={pic4} alt="" /></div>
                            </div>
                        </div>
                        <div className="hidden lg:flex gap-6 h-[517px]">
                            <div className="w-[269px] flex items-center justify-center "><img className="h-full w-auto object-cover" src={pic5} alt="" /></div>
                            <div className="flex-1 flex items-center justify-center "><img className="h-full w-auto object-cover" src={pic6} alt="" /></div>
                        </div>
                        <div className="hidden lg:flex gap-6 h-[465px] ">
                            <div className="w-[376px]  flex items-center justify-center "><img className="h-full w-auto object-cover" src={pic7} alt="" /></div>
                            <div className="flex-1 flex gap-6 flex-col">
                                <div className="flex-1 flex items-center justify-center "><img className="h-full w-auto object-cover" src={pic8} alt="" /></div>
                                <div className="flex-1 flex items-center justify-center "><img className="h-full w-auto object-cover" src={pic9} alt="" /></div>
                            </div>
                            <div className="w-[450px] flex items-center justify-center "><img className="h-full w-auto object-cover" src={pic10} alt="" /></div>
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
                                <div className="h-[130px] border border-prim-darkGray">
                                    <img src={pic9} alt="" />
                                </div>
                                <div className="h-[130px] border border-prim-darkGray">
                                    <img src={pic8} alt="" />
                                </div>
                            </div>
                            <div className="flex-1 h-[280px] overflow-hidden border-prim-darkGray border">
                                <img className="" src={pic5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-2.5 border-y border-prim-darkGray"></div>
        </div>
    </div>
  )
}

export default Explore