
const Header = () => {
  return (
    <div className="w-full bg-primary hidden lg:block">
        <div className="max-w-[1165px] mx-auto flex justify-between merri text-base h-10">
            <button className="h-full px-16 hover:bg-[#2C6F76]">
                HOME
            </button>
            <button className="h-full px-16 hover:bg-[#2C6F76]">
                ABOUT US
            </button>
            <button className="h-full px-16 hover:bg-[#2C6F76]">
                MENU
            </button>
            <button className="h-full px-16 hover:bg-[#2C6F76]">
                GALLERY
            </button>
            <button className="h-full px-16 hover:bg-[#2C6F76]">
                CONTACT
            </button>
        </div>
        <div className="h-1 border-y w-full border-[#9c9481] border-b"></div>
    </div>
  )
}

export default Header