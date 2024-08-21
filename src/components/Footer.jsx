import Logo from "../assets/Logo.png"
import Facebook from "../assets/social/Facebook.png"
import Instagram from "../assets/social/Instagram.png"
import Youtube from "../assets/social/YouTube.png"
const Footer = () => {
  return (
    <div className="w-full bg-primary iplex text-lg">
        <div className="h-1.5 border-y border-prim-darkGray"></div>
        <div className="lg:max-w-[1145px] max-w-[375px] p-5 mx-auto pt-24 lg:pb-14 flex gap-7 lg:gap-10 flex-col">
            <div className="flex justify-between pb-10">
                <div className=" hidden lg:flex gap-10 flex-col">
                    <div className="">Home</div>
                    <div className="">About</div>
                    <div className="">Menu</div>
                    <div className="">Gallery</div>
                    <div className="flex gap-[120px]">Contact <div>A Hospitality Unit of: KLIC</div></div>
                </div>
                <div className="flex flex-col w-full lg:w-auto lg:justify-around gap-10 lg:gap-0 items-center">
                    <img className="lg:w-[371px] w-[217px]" src={Logo} alt="" />
                    {/* <button className="bg-[#D0A127] px-4 py-2 merri-italic underline text-xs lg:text-lg font-thin max-w-fit relative ">
                        <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-prim-darkGray"></div>
                        <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-prim-darkGray"></div>
                        Make Reservations!
                    </button> */}
                </div>
            </div>
            <div className="h-[1px] w-full bg-prim-darkGray"></div>
            <div className="flex justify-between lg:p-0 pb-5">
                <div className="lg:text-lg text-xs flex gap-6 lg:gap-[72px] italic">
                    Privacy
                    <div>
                        Terms & Conditions
                    </div>
                </div>
                <div className="flex gap-2 lg:gap-6">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Youtube} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer