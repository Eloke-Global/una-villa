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
    <div className="w-full bg-primary relative" id = "top">
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
              <button onClick={toggleMenu} className="absolute right-4 top-6">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L14 14" stroke="#665325" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 14L14 1" stroke="#665325" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div className=" flex flex-col bg-black gap-[1px] border-y border-black w-full merri-bold uppercase">
                <a href="#top">
                  <button href = "#top" className="h-[75px] bg-primary uppercase">
                    Home
                  </button>
                </a>
                <a href="#ourstory">
                  <button href = "#ourstory" className="h-[75px] bg-primary uppercase">
                    About Us
                  </button>
                </a>
                <a href="#menu">
                  <button href = "#menu" className="h-[75px] bg-primary uppercase">
                    Menu
                  </button>
                </a>
                <a href="#gallery">
                  <button href = "#gallery" className="h-[75px] bg-primary uppercase">
                    Gallery
                  </button>
                </a>
                <a href="#contact">
                  <button href = "#contact" className="h-[75px] bg-primary uppercase">
                    Contact
                  </button>
                </a>
              </div>
              <div className=" flex gap-4">
                <a href="">
                  <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 12.5764C25 5.63064 19.4036 0 12.5 0C5.59644 0 0 5.63064 0 12.5764C0 18.8536 4.57106 24.0565 10.5469 25V16.2118H7.37305V12.5764H10.5469V9.80566C10.5469 6.65369 12.413 4.91266 15.2683 4.91266C16.6359 4.91266 18.0664 5.15829 18.0664 5.15829V8.25326H16.4902C14.9374 8.25326 14.4531 9.2227 14.4531 10.2173V12.5764H17.9199L17.3657 16.2118H14.4531V25C20.4289 24.0565 25 18.8536 25 12.5764Z" fill="#100F0D"/>
                  </svg>
                </a>
                <a target="_blank" href="https://www.instagram.com/unavilla_chennai?igsh=aTl3bTllMWpoeDJh">
                  <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0C9.10522 0 8.67952 0.0144019 7.34625 0.0752097C6.01577 0.135906 5.10712 0.347245 4.312 0.656197C3.49001 0.975643 2.79292 1.40308 2.09802 2.09798C1.40308 2.79288 0.975643 3.49005 0.656234 4.31204C0.347208 5.10712 0.135943 6.01577 0.0751725 7.34625C0.0143647 8.67952 0 9.10522 0 12.5C0 15.8948 0.0143647 16.3205 0.0751725 17.6537C0.135943 18.9842 0.347208 19.8929 0.656234 20.688C0.97568 21.5099 1.40312 22.207 2.09802 22.902C2.79296 23.5969 3.49001 24.0244 4.312 24.3438C5.10712 24.6528 6.01577 24.8641 7.34625 24.9248C8.67952 24.9856 9.10522 25 12.5 25C15.8948 25 16.3205 24.9856 17.6537 24.9248C18.9842 24.8641 19.8929 24.6528 20.688 24.3438C21.5099 24.0244 22.207 23.5969 22.902 22.902C23.5969 22.207 24.0244 21.5099 24.3438 20.688C24.6528 19.8929 24.8641 18.9842 24.9248 17.6537C24.9856 16.3205 25 15.8948 25 12.5C25 9.10522 24.9856 8.67952 24.9248 7.34625C24.8641 6.01577 24.6528 5.10712 24.3438 4.31204C24.0244 3.49005 23.5969 2.79288 22.902 2.09798C22.207 1.40308 21.5099 0.975643 20.688 0.656197C19.8929 0.347245 18.9842 0.135906 17.6537 0.0752097C16.3205 0.0144019 15.8948 0 12.5 0ZM12.5 2.25224C15.8376 2.25224 16.233 2.265 17.5511 2.32514C18.7698 2.3807 19.4317 2.58433 19.8721 2.75552C20.4556 2.9823 20.872 3.25315 21.3094 3.69056C21.7469 4.12798 22.0177 4.5444 22.2445 5.12785C22.4157 5.56831 22.6193 6.2302 22.6749 7.44893C22.735 8.76701 22.7478 9.16238 22.7478 12.5C22.7478 15.8376 22.735 16.233 22.6749 17.5511C22.6193 18.7698 22.4157 19.4317 22.2445 19.8721C22.0177 20.4556 21.7469 20.872 21.3094 21.3094C20.872 21.7469 20.4556 22.0177 19.8722 22.2445C19.4317 22.4157 18.7698 22.6193 17.5511 22.6749C16.2332 22.735 15.8379 22.7478 12.5 22.7478C9.16212 22.7478 8.76686 22.735 7.44893 22.6748C6.23016 22.6193 5.56831 22.4157 5.12788 22.2445C4.54436 22.0177 4.12798 21.7469 3.6906 21.3094C3.25318 20.872 2.9823 20.4556 2.75552 19.8722C2.58433 19.4317 2.38074 18.7698 2.32514 17.5511C2.265 16.233 2.25224 15.8376 2.25224 12.5C2.25224 9.16238 2.265 8.76701 2.32514 7.44893C2.38074 6.23016 2.58433 5.56831 2.75552 5.12788C2.9823 4.54436 3.25318 4.12798 3.69056 3.6906C4.12798 3.25315 4.5444 2.9823 5.12785 2.75552C5.56831 2.58433 6.2302 2.3807 7.44893 2.32514C8.76701 2.265 9.16241 2.25224 12.5 2.25224Z" fill="#100F0D"/>
                    <path d="M12.5 16.6669C10.1988 16.6669 8.33329 14.8014 8.33329 12.5002C8.33329 10.199 10.1988 8.33351 12.5 8.33351C14.8012 8.33351 16.6666 10.199 16.6666 12.5002C16.6666 14.8014 14.8012 16.6669 12.5 16.6669ZM12.5 6.08128C8.95488 6.08128 6.08105 8.9551 6.08105 12.5002C6.08105 16.0453 8.95488 18.9191 12.5 18.9191C16.0451 18.9191 18.9189 16.0453 18.9189 12.5002C18.9189 8.9551 16.0451 6.08128 12.5 6.08128ZM20.6725 5.82766C20.6725 6.65612 20.0009 7.32765 19.1725 7.32765C18.3441 7.32765 17.6725 6.65612 17.6725 5.82766C17.6725 4.99924 18.3441 4.32764 19.1725 4.32764C20.0009 4.32764 20.6725 4.99924 20.6725 5.82766Z" fill="#100F0D"/>
                  </svg>
                </a>
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