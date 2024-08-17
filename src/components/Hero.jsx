
import HeroImage from "../assets/Hero Pattern.png";
import Logo from "../assets/Logo.png"
const Hero = () => {
  return (
    <div className="w-full bg-primary">
        <div className="mx-auto max-w-screen-xl flex flex-col pt-[181px] pb-[138px] items-center justify-center">
            <img className="h-[90px]" src={Logo}/>
            <h1 className="merri text-2xl py-[62px]">
                CELEBRATE FLAVOUR AND TOGETHERNESS IN EVERY MEAL
            </h1>
            <img className="h-[762px]" src={HeroImage}/>
        </div>
    </div>
  )
}

export default Hero