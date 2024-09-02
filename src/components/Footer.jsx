import Logo from "../assets/Logo.png"
import KICl from "../assets/KICL.png"
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80; // Adjust this value based on the height of your sticky header
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
};
const Footer = () => {
  return (
    <div className="w-full bg-primary iplex text-lg" id = "footer">
        <div className="h-2.5 border-y border-prim-darkGray"></div>
        <div className="lg:max-w-[1145px] max-w-[375px] p-5 mx-auto lg:py-[50px] py-[25px]  flex gap-[25px] lg:gap-[50px] flex-col">
            {/* <div className="flex flex-col gap-10 lg:hidden">
                <img src={KICl} alt="" />
                <img src={Logo} alt="" />
            </div> */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 pb-10">
                <div className="flex align-bottom lg:justify-end justify-center lg:items-end lg:gap-40 ">
                    <div className="lg:flex hidden gap-10 flex-col">
                        <button onClick={() => scrollToSection('top')} className="cursor-pointer">Home</button>
                        <button onClick={() => scrollToSection('ourstory')} className="cursor-pointer">About</button>
                        <button onClick={() => scrollToSection('menu')} className="cursor-pointer">Menu</button>
                        <button onClick={() => scrollToSection('gallery')} className="cursor-pointer">Gallery</button>
                        <button onClick={() => scrollToSection('contact')} className="cursor-pointer flex gap-[120px]">Contact </button>
                    </div>
                    <img className="lg:h-10 h-6 lg:pl-20 mb-6 lg:mb-0" src={KICl} alt="" />
                </div>
                <div className="flex flex-col w-full lg:w-auto gap-10 lg:gap-0 lg:justify-end items-center">
                    <img className="lg:w-[371px] w-[217px] lg:self-end" src={Logo} alt="" />
                    {/* <button className="bg-[#D0A127] px-4 py-2 merri-italic underline text-xs lg:text-lg font-thin max-w-fit relative ">
                        <div className="absolute w-[calc(100%+8px)] h-full top-0 -left-[4px] border border-prim-darkGray"></div>
                        <div className="absolute h-[calc(100%+8px)] w-full left-0 -top-[4px] border border-prim-darkGray"></div>
                        Make Reservations!
                    </button> */}
                </div>
            </div>
            <div className="h-[1px] w-full bg-prim-darkGray"></div>
            <div className="flex justify-between lg:p-0 pb-5 items-center">
                <div className="lg:text-lg text-xs flex gap-6 lg:gap-[120px] italic">
                    Privacy Policy
                    <div className="lg:pl-16">
                        Terms & Conditions
                    </div>
                </div>
                <div className="flex gap-2 lg:gap-6">
                    <a target="_blank" href="https://m.facebook.com/profile.php?id=61564092323239&wtsid=rdr_09XVu4ziSB82FYl4v">
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
    </div>
  )
}

export default Footer