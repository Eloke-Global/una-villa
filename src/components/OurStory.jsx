// import OurStoryPic from "../assets/Our-story-photo.jpg"
import OurStoryPic from "../assets/NB_Website - Our story.jpg"
const OurStory = () => {
  return (
    <div className="w-full pb-7 pt-9 lg:pt-[96px] lg:pb-[104px] bg-primary" id = "ourstory">
        <div className="lg:max-w-[1145px] max-w-[375px] lg:p-0 p-5 mx-auto">
            <div className="hidden lg:block h-full tracking-[10px] mb-9 merri-bold text-center pb-6 border-b border-prim-darkGray">
                OUR STORY
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:items-center gap-9">
                <div className="flex-1">
                    {/* <img className="w-full h-full object-fill " src={OurStoryPic}/> */}
                    <div className="lg:h-[576px] h-[344px] w-full" style={{backgroundImage:`url(${OurStoryPic})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
                </div>
                <div className="w-full text-xs lg:text-base iplex flex-1 flex flex-col gap-2">
                    <div className="text-xs pb-5 merri-bold tracking-[4px] mb-5 border-b border-prim-darkGray lg:hidden text-center">
                        OUR STORY
                    </div>
                    {/* <div className="merri-bold text-[16px] pb-6 lg:pb-2">OUR STORY</div> */}
                    <div className=" lg:tracking-[1.5px] tracking-[2px] ">
                        At Una Villa, we envisioned a deep connection with the community. Restoring a 60-year-old house nestled within a lush domestic garden in the vibrant neighborhood of Nungambakkam, we found the perfect setting to create a warm, welcoming home away from home for friends, family, and guests.
                    </div>
                    <div className="lg:tracking-[1.5px] tracking-[2px]">
                        The name "Una Villa" reflects this vision beautifully. "Una" (உணவு) means "food" in Tamil, while "Villa" evokes the grandeur and timeless charm of a residence. Together, they embody our commitment to both exquisite cuisine and historical significance.
                    </div>
                    <div className="lg:tracking-[1.5px] tracking-[2px]">
                    Our focus is on comfort cuisine crafted from the freshest ingredients, inspired by both local and global recipes. Each detail, from objects and furniture to the overall ambiance, is thoughtfully curated to reveal the beauty in the ordinary. We invite you to pause, observe, and immerse yourself in the simple joys of everyday moments. Here, time slows to a gentle pace, welcoming you to celebrate life’s milestones—whether it’s a special occasion, a first date, a business meeting, or just the everyday. 
                    </div>
                    <div className="lg:tracking-[1.5px] tracking-[2px]">
                    Come, find your cozy spot, savor the delightful food, and join us in celebrating the beauty of daily life at Una Villa.
                    </div>
                </div>
            </div>
            {/* <div className="h-1 w-full  pt-40 border-b border-prim-darkGray"></div> */}
        </div>
    </div>
  )
}

export default OurStory