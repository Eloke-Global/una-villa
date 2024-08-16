import MenuPlaceholder from "../assets/MenuPlaceholder.png"
import MenuPlaceholder2 from "../assets/MenuPlaceholder2.png"
const Menu = () => {
  return (
    <div className="w-full bg-primary">
        <div className="mx-auto max-w-[1145px] pt-[74px] pb-[114px]">
            <div className="flex flex-col gap-9">
                <div className="merri-italic text-[22px]">
                    Finest dining Experience
                </div>
                <div className="w-full h-[1px] bg-black"></div>
                <div className="text-justify iplex text-lg">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into versions of Lorem Ipsum. desktop publishing software like specimen book. It has survived not only five centuries, but also the leap into versions of Lorem Ipsum. desktop publishing software like desktop publishing software like
                </div>
            </div>
            <div className="py-32">
                <div className="h-[820px] w-full border border-black flex items-center justify-center">
                    <div className="flex flex-col gap-11 items-center">
                        <div className="merri text-[22px]">MENU</div>
                        <img src = {MenuPlaceholder}/>
                        <div className="iplex text-lg">Revealing Soon</div>
                    </div>
                </div>
            </div>
            <div className="flex gap-24">
                <div className="h-[385px] w-[486px]"><img src = {MenuPlaceholder2}/></div>
                <div className="flex gap-4 flex-col justify-center">
                    <div className="merri text-[22px]">
                        Download Our Menu
                        <div className="iplex pt-2.5 py-9">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </div>
                    </div>
                    <button className="bg-[#2E6E76] px-10 py-2 iplex underline text-lg text-white font-thin border border-black max-w-fit ">Download Menu!</button>
                    <button className="bg-[#D0A127] px-10 py-2 iplex underline text-lg  font-thin border border-black max-w-fit ">Download Bakery Menu!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu