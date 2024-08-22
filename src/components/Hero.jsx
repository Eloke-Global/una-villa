import { useState, useEffect } from "react";
import HeroImage from "../assets/Hero Pattern.png";
import Logo from "../assets/Logo.png"
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
  
      // Cleanup function to ensure we remove the class when component unmounts
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }, [isOpen]);
  };
  return (
    <div className="w-full bg-primary relative">
      <div className="absolute top-[54px] lg:top-[86px] left-[20px] lg:left-[110px]">
        <svg className="h-5 w-5 lg:h-auto lg:w-auto" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3432 6.35165C19.6525 6.60661 20.8558 7.24572 21.7991 8.18718C22.7423 9.12864 23.3827 10.3296 23.6381 11.6364M18.3432 1C21.0634 1.30161 23.6 2.51743 25.5365 4.44781C27.4731 6.3782 28.6944 8.90842 29 11.623M27.6595 22.2996V26.3133C27.661 26.6859 27.5846 27.0547 27.435 27.3961C27.2854 27.7376 27.0661 28.044 26.791 28.2959C26.5159 28.5478 26.1911 28.7396 25.8375 28.859C25.4838 28.9783 25.1091 29.0227 24.7373 28.9891C20.6124 28.5418 16.6502 27.135 13.169 24.8817C9.93017 22.8276 7.18422 20.0869 5.12614 16.8543C2.86071 13.3639 1.45088 9.39004 1.01088 5.25456C0.977382 4.88459 1.02144 4.5117 1.14024 4.15965C1.25904 3.8076 1.44998 3.48409 1.70091 3.20973C1.95184 2.93536 2.25726 2.71615 2.59772 2.56606C2.93818 2.41596 3.30623 2.33826 3.67843 2.33791H7.69985C8.35039 2.33152 8.98107 2.56145 9.47432 2.98484C9.96757 3.40823 10.2898 3.99618 10.3808 4.63912C10.5505 5.92361 10.8653 7.18481 11.3191 8.39866C11.4995 8.87753 11.5385 9.39797 11.4316 9.8983C11.3247 10.3986 11.0763 10.8579 10.7159 11.2217L9.01352 12.9208C10.9218 16.2703 13.7004 19.0437 17.0564 20.9483L18.7588 19.2491C19.1232 18.8894 19.5834 18.6415 20.0847 18.5348C20.586 18.4281 21.1074 18.4671 21.5872 18.6471C22.8033 19.1 24.067 19.4142 25.3539 19.5836C26.0051 19.6753 26.5997 20.0027 27.0249 20.5034C27.45 21.0042 27.6758 21.6434 27.6595 22.2996Z" stroke="#665325" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div onClick={toggleMenu} className="absolute top-[58px] right-[19px] lg:hidden">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7.33331H20" stroke="#665325" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1 1H20" stroke="#665325" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1 13.6667H20" stroke="#665325" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      {
        isOpen && (
          <div className="h-screen flex lg:hidden bg-primary z-[1000] absolute top-0 left-0 w-screen">
            <div className="relative flex h-full w-full justify-between items-center flex-col bg-primary pt-16 pb-12">
              <img className="h-[56px] " src={Logo}/>
              <button onClick={toggleMenu} className="absolute right-4 top-6">x</button>
              <div className=" flex flex-col bg-black gap-[1px] border-y border-black w-full merri-bold uppercase">
                <button className="h-[75px] bg-primary uppercase">
                  Home
                </button>
                <button className="h-[75px] bg-primary uppercase">
                  About Us
                </button>
                <button className="h-[75px] bg-primary uppercase">
                  Menu
                </button>
                <button className="h-[75px] bg-primary uppercase">
                  Gallery
                </button>
                <button className="h-[75px] bg-primary uppercase">
                  Contact
                </button>
              </div>
              <div className="">
                Icons
              </div>
            </div>
          </div>
        )
      }
      <div className="mx-auto lg:max-w-screen-xl max-w-[375px] p-5 flex flex-col pt-16 lg:pt-16 pb-12 lg:pb-16 items-center justify-center h-screen max-h-screen">
          <img className="h-[48px] lg:h-[60px]" src={Logo}/>
          <h1 className="merri text-xs px-12 lg:text-base py-6 lg:py-[62px] uppercase tracking-[4.4px] text-center leading-normal">
              CELEBRATE FLAVOUR AND TOGETHERNESS IN EVERY MEAL
          </h1>
          <div className="max-h-full overflow-hidden">
            <img className="h-full max-h-full object-contain" src={HeroImage}/>
          </div>
      </div>
    </div>
  )
}

export default Hero