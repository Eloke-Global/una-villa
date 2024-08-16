
import HeroImage from "../assets/Hero Pattern.png";
import Logo from "../assets/Logo.png"
const Hero = () => {
  return (
    <div className="w-full bg-primary">
        <div className="mx-auto max-w-screen-xl flex flex-col pt-[169px] pb-[138px] items-center justify-center">
            <img className="h-[148px]" src={Logo}/>
            <h1 className="merri text-2xl pt-4 pb-8">
                CELEBRATE FLAVOUR AND TOGETHERNESS IN EVERY MEAL
            </h1>
            <img src={HeroImage}/>
        </div>
    </div>
  )
}

export default Hero