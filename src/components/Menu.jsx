// import HTMLFlipBook from "react-pageflip";
// import FlipBook from './FlipBook';
// import MenuPlaceholder from "../assets/MenuPlaceholder.png"
// import MenuPlaceholder2 from "../assets/MenuPlaceholder2.png"
import Menu1 from "../assets/menu/Menu Page-01.jpg";
import Menu6 from "../assets/menu/Menu Page-02.jpg";
import Menu2 from "../assets/menu/Menu Page-03.jpg";
import Menu5 from "../assets/menu/Menu Page-04.jpg";
import Menu3 from "../assets/menu/Menu Page-05.jpg";
import Menu4 from "../assets/menu/Menu Page-06.jpg";
import HTMLFlipBook from 'react-pageflip';
import MenuPDF from "../assets/menu/Una Villa Menu Card.pdf"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel"

const Menu = () => {
  return (
    <div className="w-full bg-primary pt-[25px] lg:pt-[50px]" id = "menu">
        <div className="mx-auto max-w-[375px] px-5 lg:max-w-[1145px]">
            <div className="flex flex-col gap-[25px] lg:gap-[50px]">
                <div className="merri-bold text-center text-xs lg:text-base tracking-[10px]">
                    MENU
                </div>
                <div className="w-full h-[1px] bg-prim-darkGray"></div>
                <div className="text-center iplex text-xs lg:text-base lg:tracking-[1.5px] tracking-[2px]">
                    Whether you're in the mood for a hearty meal or a light, refreshing bite, our diverse menu caters to all preferences. Explore our selection of appetizers, mains, and desserts, each crafted to perfection.
                </div>
            </div>
            <div className="">
                <div className="flex lg:hidden">
                    <HTMLFlipBook
                        height={400}
                        width={300}
                    >
                        <img src={Menu1} />
                        <img src={Menu2} />
                        <img src={Menu3} />
                        <img src={Menu4} />
                        <img src={Menu5} />
                        <img src={Menu6} />
                    </HTMLFlipBook>
                </div>
                <div className="h-[1000px] w-[750px] mx-auto pt-11 lg:flex hidden items-center justify-center ">
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
                        {/* <FlipBook images={[Menu1, Menu2, Menu3, Menu4, Menu5, Menu6]} /> */}
                            <HTMLFlipBook
                                height={1000}
                                width={750}
                            >
                                <img src={Menu1} />
                                <img src={Menu2} />
                                <img src={Menu3} />
                                <img src={Menu4} />
                                <img src={Menu5} />
                                <img src={Menu6} />
                            </HTMLFlipBook>
                            
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
                <div className="w-full pb-[40px] lg:py-[50px] flex items-center justify-center">
                    <a href={MenuPDF} download="UNA VILLA MENU.pdf">
                        <button className="bg-[#2E6E76] px-4 py-2 merri-italic w-36 text-xs lg:w-[270px] underline lg:text-base text-primary font-thin relative">
                            <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-prim-darkGray"></div>
                            <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-prim-darkGray"></div>
                            Download Menu!
                        </button>
                    </a>
                </div>
            </div>
            {/* <div className="flex gap-9 lg:gap-24 lg:flex-row flex-col items-center justify-center">
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
                            <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-prim-dabg-prim-darkGray"></div>
                            <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-prim-dabg-prim-darkGray"></div>
                            Download Menu!
                        </button>
                    </a>
                    <button className="bg-[#D0A127] px-4 py-2 merri-italic w-[270px] underline text-lg  font-thin relative ">
                        <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-prim-dabg-prim-darkGray"></div>
                        <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-prim-dabg-prim-darkGray"></div>
                        
                        Download Bakery Menu!
                    </button>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Menu