import React from 'react'

const CallUs = () => {
  return (
    <div className='w-full bg-primary'>
        <div className="mx-auto max-w-[375px] lg:max-w-[1145px] px-5 lg:px-0">
            <div className="h-1 lg:h-2.5 border-y border-black w-full"></div>
            <div className="flex lg:flex-row flex-col text-center justify-around py-11 lg:py-14 gap-3 items-center">
                <div className="merri-bold text-[20px] lg:text-4xl font-bold">
                    CALL US TO BOOK TABLES <br /> & RESERVATIONS
                </div>
                <button className="bg-[#D0A127] merri-italic underline text-xs lg:text-[22px] lg:px-12 px-10 py-2 lg:py-4 relative">
                    <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-black"></div>
                    <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-black"></div>
                    Call Now!
                </button>
            </div>
            <div className="h-1 lg:h-2.5 border-y border-black w-full"></div>
        </div>
    </div>
  )
}

export default CallUs