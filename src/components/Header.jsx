
const Header = () => {
  return (
    <div className="w-full bg-primary">
        <div className="max-w-screen-xl mx-auto flex justify-between merri text-xl">
            <button className="h-full px-16 hover:bg-[#2C6F76] py-5">
                HOME
            </button>
            <button className="h-full px-16 hover:bg-[#2C6F76] py-5">
                ABOUT US
            </button>
            <button className="h-full px-16 hover:bg-[#2C6F76] py-5">
                MENU
            </button>
            <button className="h-full px-16 hover:bg-[#2C6F76] py-5">
                GALLERY
            </button>
            <button className="h-full px-16 hover:bg-[#2C6F76] py-5">
                CONTACT
            </button>
        </div>
        <div className="h-2.5 border-y w-full border-black"></div>
    </div>
  )
}

export default Header