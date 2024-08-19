// import HTMLFlipBook from "react-pageflip";
import FlipBook from './FlipBook';
import MenuPlaceholder from "../assets/MenuPlaceholder.png"
import MenuPlaceholder2 from "../assets/MenuPlaceholder2.png"
import Menu1 from "../assets/menu/Menu Page-01.jpg";
import Menu6 from "../assets/menu/Menu Page-02.jpg";
import Menu2 from "../assets/menu/Menu Page-03.jpg";
import Menu5 from "../assets/menu/Menu Page-04.jpg";
import Menu3 from "../assets/menu/Menu Page-05.jpg";
import Menu4 from "../assets/menu/Menu Page-06.jpg";
import MenuPDF from "../assets/menu/Una Villa Menu Card.pdf"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
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
                    Whether you`re in the mood for a hearty meal or a light, refreshing bite, our diverse menu caters to all preferences. Explore our selection of appetizers, mains, and desserts, each crafted to perfection.
                </div>
            </div>
            <div className="py-9 lg:py-32">
                <div className="h-auto w-full border border-black flex items-center justify-center ">
                    {/* <div className="flex flex-col gap-11 items-center"> */}
                        {/* <div className="merri-bold text-[22px]">MENU</div>
                        <img src = {MenuPlaceholder}/>
                        <div className="iplex text-lg">Revealing Soon</div> */}
                        {/* <HTMLFlipBook size="stretch">
                            <img src={Menu1}/>
                            <img src={Menu2}/>
                            <img src={Menu3}/>
                            <img src={Menu4}/>
                            <img src={Menu5}/>
                            <img src={Menu6}/>
                        </HTMLFlipBook> */}
                        <FlipBook images={[Menu1, Menu2, Menu3, Menu4, Menu5, Menu6]} />
                        {/* <Carousel className="lg:w-[90%] w-[70%] h-full">
                            <CarouselContent>
                                <CarouselItem>
                                    <img src={Menu1}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img src={Menu2}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img src={Menu3}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img src={Menu4}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img src={Menu5}/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img src={Menu6}/>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel> */}
                    {/* </div> */}
                </div>
            </div>
            <div className="flex gap-9 lg:gap-24 lg:flex-row flex-col items-center justify-center">
                <div className="lg:h-[385px] lg:w-[486px] flex items-center justify-center"><img src = {MenuPlaceholder2}/></div>
                <div className="flex gap-5 lg:gap-[26px] flex-col text-center lg:text-left justify-center items-center lg:items-start">
                    <div className="merri-bold text-base lg:text-[22px]">
                        DOWNLOAD MENU
                        <div className="iplex text-xs lg:text-lg pt-2.5 py-4 lg:py-9">
                            From traditional favorites to contemporary creations, our food promises to delight and satisfy.
                        </div>
                    </div>
                    <a href={MenuPDF} download="UNA VILLA MENU.pdf">
                        <button className="bg-[#2E6E76] px-4 py-2 merri-italic w-[270px] underline text-lg text-primary font-thin relative">
                            <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-black"></div>
                            <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-black"></div>
                            Download Menu!
                        </button>
                    </a>
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