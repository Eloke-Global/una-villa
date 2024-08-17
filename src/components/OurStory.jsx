import OurStoryPic from "../assets/Our-story-photo.jpg"
const OurStory = () => {
  return (
    <div className="w-full pb-7 pt-9 lg:py-[144px] bg-primary">
        <div className="lg:max-w-[1145px] max-w-[375px] lg:p-0 p-5 mx-auto">
            <div className="w-full flex flex-col lg:flex-row gap-11">
                <div className="w-full h-min p-1 lg:p-3 border-2 border-black">
                    <img className="lg:w-[550px] lg:h-[445px] w-[320px] h-[264px]" src={OurStoryPic}/>
                </div>
                <div className="w-full text-xs lg:text-lg iplex ">
                    <div className="merri-bold text-[16px] lg:text-[22px] pb-6 lg:pb-2">OUR STORY</div>
                    <div className="flex flex-col text-justify">
                        We always wanted Una Villa to have a strong connection with the community. Thoughtfully restoring a 60-year-old house nestled within a lush native garden in a vibrant neighbourhood of Nungambakkam seemed the perfect setting to create a warm, welcoming and familiar home away from home for friends, family and guests alike.
                    </div>
                    <div className="py-2 text-justify">
                        Through comfort cuisine made using the freshest ingredients inspired from local and global recipes to objects and furniture old and new, each detail is crafted to awaken a sense of wonder for the beauty found in the ordinary. We invite you in our home to pause, observe and experience your simple everyday moments. Here, time eases into a warm embrace welcoming you to live your celebrations, first dates, business meetings to even just the mundane.
                    </div>
                    <div className="text-justify">
                        So cozy up to a spot, enjoy the good food and let`s celebrate everydays together at Una Villa. 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStory