const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80; // Adjust this value based on the height of your sticky header
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
};
const Header = () => {
  return (
    <div className="w-full bg-primary hidden lg:block">
        <div className="max-w-[1165px] mx-auto flex justify-between merri text-base h-10">
            <button onClick={() => scrollToSection('top')} className="h-full px-16 hover:bg-[#2C6F76]">
                HOME
            </button>
            <button onClick={() => scrollToSection('ourstory')} className="h-full px-16 hover:bg-[#8471a2]">
                ABOUT US
            </button>
            <button onClick={() => scrollToSection('menu')} className="h-full px-16 hover:bg-[#2665ae]">
                MENU
            </button>
            <button onClick={() => scrollToSection('gallery')} className="h-full px-16 hover:bg-[#c49596]">
                GALLERY
            </button>
            <button onClick={() => scrollToSection('contact')} className="h-full px-16 hover:bg-[#d0a027]">
                CONTACT
            </button>
        </div>

        <div className="h-1 border-y w-full border-[#9c9481] border-b"></div>
    </div>
  )
}

export default Header