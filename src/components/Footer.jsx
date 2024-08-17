import Logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <div className="w-full bg-primary iplex text-lg">
        <div className="h-2.5 border-y border-black"></div>
        <div className="max-w-[1145px] mx-auto pt-24 pb-14 flex gap-10 flex-col">
            <div className="flex justify-between pb-10">
                <div className="flex gap-10 flex-col">
                    <div className="">Home</div>
                    <div className="">About</div>
                    <div className="">Menu</div>
                    <div className="">Gallery</div>
                    <div className="">Contact</div>
                </div>
                <div className="flex flex-col justify-around items-center">
                    <img className="w-[371px]" src={Logo} alt="" />
                    <button className="bg-[#D0A127] px-4 py-2 iplex underline text-lg font-thin max-w-fit relative ">
                        <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-black"></div>
                        <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-black"></div>
                        Make Reservations!
                    </button>
                </div>
            </div>
            <div className="h-[1px] w-full bg-black"></div>
            <div className="flex justify-between">
                <div className=" flex gap-[72px] italic">
                    Privacy
                    <div>
                        Terms & Conditions
                    </div>
                </div>
                {/* <div className="">
                    FB
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Footer