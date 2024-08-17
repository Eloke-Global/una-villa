import React from 'react'

const CallUs = () => {
  return (
    <div className='w-full bg-primary'>
        <div className="mx-auto max-w-[1145px]">
            <div className="h-2.5 border-y border-black w-full"></div>
            <div className="flex justify-around py-14 items-center">
                <div className="merri text-4xl font-bold">
                    CALL US TO BOOK TABLES <br /> & RESERVATIONS
                </div>
                <button className="bg-[#D0A127] underline italic text-[22px] px-10 py-2 relative">
                    <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-black"></div>
                    <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-black"></div>
                    Call Now!
                </button>
            </div>
            <div className="h-2.5 border-y border-black w-full"></div>
        </div>
    </div>
  )
}

export default CallUs