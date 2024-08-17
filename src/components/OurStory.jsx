import OurStoryPic from "../assets/Our-story-photo.jpg"
const OurStory = () => {
  return (
    <div className="w-full py-[144px] bg-primary">
        <div className="max-w-[1145px] mx-auto">
            <div className="w-full flex gap-11">
                <div className="w-full h-min p-3 border-2 border-black">
                    <img className="w-[550px] h-[445px]" src={OurStoryPic}/>
                </div>
                <div className="w-full text-lg iplex ">
                    <div className="merri-bold text-[22px] pb-2">OUR STORY</div>
                    <div className="flex flex-col gap-2">
                        We always wanted Una Villa to have a strong connection with the community. Thoughtfully restoring a 60-year-old house nestled within a lush native garden in a vibrant neighbourhood of Nungambakkam seemed the perfect setting to create a warm, welcoming and familiar home away from home for friends, family and guests alike.
                    </div>
                    <div>
                        Through comfort cuisine made using the freshest ingredients inspired from local and global recipes to objects and furniture old and new, each detail is crafted to awaken a sense of wonder for the beauty found in the ordinary. We invite you in our home to pause, observe and experience your simple everyday moments. Here, time eases into a warm embrace welcoming you to live your celebrations, first dates, business meetings to even just the mundane.
                    </div>
                    <div>
                        So cozy up to a spot, enjoy the good food and let's celebrate everydays together at Una Villa. 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStory