
const CallUs = () => {
  return (
    <div className='w-full bg-primary' id = "callus">
        <div className="mx-auto max-w-[375px] lg:max-w-[1145px] px-5 lg:px-0">
            <div className="h-1 lg:h-2.5 border-y border-prim-darkGray w-full"></div>
            <div className="flex lg:flex-row flex-col text-center justify-around py-[25px] lg:py-[50px] gap-3 items-center">
                <div className="merri-bold text-[20px] lg:text-4xl font-bold">
                    <a href="tel:+91 72006 10031">
                        CALL US TO BOOK TABLES <br /> & RESERVATIONS
                    </a>
                </div>
                <a href="tel:+91 72006 10031">
                    <button className="bg-[#D0A127] merri-italic underline text-xs lg:text-[22px] lg:px-12 px-10 py-2 lg:py-4 relative">
                        <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-prim-darkGray"></div>
                        <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-prim-darkGray"></div>
                        Call Now!
                    </button>
                </a>
            </div>
            <div className="h-1 lg:h-2.5 border-y border-prim-darkGray w-full"></div>
        </div>
    </div>
  )
}

export default CallUs