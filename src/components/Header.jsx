
const Header = () => {
  return (
    <div className="w-full bg-primary hidden lg:block">
        <div className="max-w-[1165px] mx-auto flex justify-between merri text-base h-10">
            <a href="#top">
                <button  className="h-full px-16 hover:bg-[#2C6F76]">
                    HOME
                </button>
            </a>
            <a href="#ourstory">
                <button className="h-full px-16 hover:bg-[#8471a2]">
                    ABOUT US
                </button>
            </a>
            <a href="#menu">
                <button className="h-full px-16 hover:bg-[#2665ae]">
                    MENU
                </button>
            </a>
            <a href="#gallery">
                <button className="h-full px-16 hover:bg-[#c49596]">
                    GALLERY
                </button>
            </a>
            <a href="#contact">
                <button className="h-full px-16 hover:bg-[#d0a027]">
                    CONTACT
                </button>
            </a>
        </div>

        <div className="h-1 border-y w-full border-[#9c9481] border-b"></div>
    </div>
  )
}

export default Header