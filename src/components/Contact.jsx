
const Contact = () => {
  return (
    <div className="w-full bg-primary">
        <div className="lg:max-w-[1145px] max-w-[375px] px-5 lg:p-0 mx-auto">
            <div className="flex gap-9 lg:gap-20 flex-col items-center lg:pt-20 py-11 lg:pb-32">
                <div className="merri-bold font-bold text-[16px] lg:text-[22px]">
                    CONTACT US
                </div>
                <div className="flex lg:flex-row flex-col gap-10 w-full">
                    <div className="merri-italic text-[16px] lg:text-[22px] flex-1 flex items-center justify-center text-center px-8 flex-col lg:py-0 py-8 gap-4 relative">
                        <div className="absolute w-[calc(100%+16px)] h-full top-0 -left-[8px] border-2 border-prim-darkGray"></div>
                        <div className="absolute h-[calc(100%+16px)] w-full left-0 -top-[8px] border-2 border-prim-darkGray"></div>
                        Address
                        <div className="iplex lg:text-lg text-xs">
                            27/14, Uthamar Gandhi Rd, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034
                        </div>
                    </div>
                    <div className="lg:block hidden w-[1px] bg-prim-darkGray"></div>
                    <div className="flex-1 flex gap-4">
                        <div className="merri-italic text-[16px] lg:text-[22px] flex-1 text-center lg:h-[215px] border flex-col p-4 py-5 lg:py-0 border-prim-darkGray flex items-center gap-2 justify-center">
                            Contact
                            <div className="iplex text-xs lg:text-lg">
                                Call us on +91 xxxxx xxxxx or write to us at xyz@xyz.com
                            </div>
                        </div>
                        <div className="merri-italic text-[16px] lg:text-[22px]  flex-1 text-center lg:h-[215px] border flex-col p-4 border-prim-darkGray flex items-center gap-2 justify-center">
                            Hours
                            <div className="iplex text-xs lg:text-lg">Tuesday to Sunday, <br /> 11am to 11pm</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 lg:gap-12 flex-col text-center">
                    <div className="merri-italic lg:text-[22px] text-[16px]">
                        Parking
                        <div className="iplex text-xs lg:text-lg">
                            At Una Villa, our valet service is designed to offer you convenience and comfort. To preserve the beauty of our garden, we have carefully retained it within the property. As a result, our valet team may need a few extra minutes to park and return your vehicle. We thank you for your patience and understanding.
                        </div>
                    </div>
                    <div className="merri-italic text-[16px] lg:text-[22px] ">
                        Events
                        <div className="iplex text-xs lg:text-lg">
                            For information about hosting outdoor events or private parties, please reach out to us at xyz@pur.com. Our team will be delighted to assist you and will respond to your inquiry shortly.
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:h-1.5 h-1 border-y border-prim-darkGray"></div>
        </div>
    </div>
  )
}

export default Contact