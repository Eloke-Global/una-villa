import React from 'react'

const ContactForm = () => {
  return (
    <div className="bg-primary py-[25px] lg:px-[50px]" id = "writetous">
        <div className="lg:max-w-[1145px] max-w-[375px] p-5 mx-auto flex lg:flex-row flex-col-reverse gap-[25px] lg:gap-28 ">
            <div className="flex-1 w-[336px]  border border-prim-darkGray p-2">
                <div className="border border-prim-darkGray w-full h-full">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15546.65629391608!2d80.24853!3d13.0570418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a64414483f%3A0xe0f81dba05a50033!2sUna%20Villa%20Restaurant%20%26%20Bakery!5e0!3m2!1sen!2sin!4v1723838821065!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className='h-[274px] lg:h-full'>
                    </iframe>
                </div>
            </div>
            <div className="flex-1 flex gap-[25px] text-[16px] lg:gap-16 flex-col justify-center merri ">
                <div className="merri-bold lg:text-base text-xs tracking-[10px] ">
                    WRITE TO US
                </div>
                <div className="flex flex-col ">
                    <div className="merri-italic">
                        Name:
                    </div>
                    <input type="text" className="bg-primary outline-none px-4 py-2 iplex border-b border-prim-darkGray mb-6" />
                    <div className="merri-italic">
                        Email:
                    </div>
                    <input type="text" className="bg-primary outline-none px-4 py-2 iplex border-b border-prim-darkGray mb-6" />
                    <div className="merri-italic">
                        Message:
                    </div>
                    <input type="text" className="bg-primary outline-none px-4 py-2 iplex border-b border-prim-darkGray mb-6" />
                </div>
                <button className="bg-[#2E6E76] mb-1 max-w-fit px-20 lg:px-10 iplex-italic italic text-lg text-primary underline py-2 relative ">
                    <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-prim-darkGray"></div>
                    <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-prim-darkGray"></div>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
