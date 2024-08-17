import MenuPlaceholder from "../assets/MenuPlaceholder.png"
import MenuPlaceholder2 from "../assets/MenuPlaceholder2.png"
const Menu = () => {
  return (
    <div className="w-full bg-primary">
        <div className="mx-auto max-w-[375px] p-5 lg:max-w-[1145px] pt-9 pb-[52px] lg:pt-[74px] lg:pb-[114px]">
            <div className="flex flex-col gap-3 lg:gap-9">
                <div className="merri-italic text-sm lg:text-[22px]">
                    Finest dining Experience
                </div>
                <div className="w-full h-[1px] bg-black"></div>
                <div className="text-justify iplex text-xs lg:text-lg">
                    Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into versions of Lorem Ipsum. desktop publishing software like specimen book. It has survived not only five centuries, but also the leap into versions of Lorem Ipsum. desktop publishing software like desktop publishing software like
                </div>
            </div>
            <div className="py-9 lg:py-32">
                <div className="lg:h-[820px] h-[477px] w-full border border-black flex items-center justify-center">
                    <div className="flex flex-col gap-11 items-center">
                        <div className="merri-bold text-[22px]">MENU</div>
                        <img src = {MenuPlaceholder}/>
                        <div className="iplex text-lg">Revealing Soon</div>
                    </div>
                </div>
            </div>
            <div className="flex gap-9 lg:gap-24 lg:flex-row flex-col items-center justify-center">
                <div className="lg:h-[385px] lg:w-[486px] flex items-center justify-center"><img src = {MenuPlaceholder2}/></div>
                <div className="flex gap-5 lg:gap-[26px] flex-col text-center lg:text-left justify-center items-center lg:items-start">
                    <div className="merri-bold text-base lg:text-[22px]">
                        DOWNLOAD MENU
                        <div className="iplex text-xs lg:text-lg pt-2.5 py-4 lg:py-9">
                            Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,
                        </div>
                    </div>
                    <button className="bg-[#2E6E76] px-4 py-2 merri-italic w-[270px] underline text-lg text-primary font-thin relative">
                        <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-black"></div>
                        <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-black"></div>
                        Download Menu!
                    </button>
                    <button className="bg-[#D0A127] px-4 py-2 merri-italic w-[270px] underline text-lg  font-thin relative ">
                        <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-black"></div>
                        <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-black"></div>
                        
                        Download Bakery Menu!
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu