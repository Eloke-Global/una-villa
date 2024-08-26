// import OurStoryPic from "../assets/Our-story-photo.jpg"
import OurStoryPic from "../assets/NB_Website - Our story.jpg"
const OurStory = () => {
  return (
    <div className="w-full pb-7 pt-9 lg:py-[144px] bg-primary">
        <div className="lg:max-w-[1145px] max-w-[375px] lg:p-0 p-5 mx-auto">
            <div className="w-full flex flex-col lg:flex-row gap-9">
                <div className="flex-1 bg-red-500">
                    {/* <img className="w-full h-full object-fill " src={OurStoryPic}/> */}
                    <div className="h-full w-full bg-blue-400" style={{backgroundImage:`url(${OurStoryPic})`, backgroundSize:'cover',backgroundPosition: 'center'}}></div>
                </div>
                <div className="w-full text-xs lg:text-base iplex flex-1 flex flex-col gap-2">
                    <div className="merri-bold text-[16px] pb-6 lg:pb-2">OUR STORY</div>
                    <div className="first-letter:float-left first-letter:font-bold first-letter:text-6xl first-letter:leading-10 first-letter:h-16 first-letter:uppercase text-justify lg:tracking-[1.5px] ">
                        At Una Villa, we envisioned a deep connection with the community. Restoring a 60-year-old house nestled within a lush domestic garden in the vibrant neighborhood of Nungambakkam, we found the perfect setting to create a warm, welcoming home away from home for friends, family, and guests.
                    </div>
                    <div className="text-justify lg:tracking-[1.5px]">
                        The name "Una Villa" reflects this vision beautifully. "Una" (உணவு) means "food" in Tamil, while "Villa" evokes the grandeur and timeless charm of a residence. Together, they embody our commitment to both exquisite cuisine and historical significance.
                    </div>
                    <div className="text-justify lg:tracking-[1.5px]">
                    Our focus is on comfort cuisine crafted from the freshest ingredients, inspired by both local and global recipes. Each detail, from objects and furniture to the overall ambiance, is thoughtfully curated to reveal the beauty in the ordinary. We invite you to pause, observe, and immerse yourself in the simple joys of everyday moments. Here, time slows to a gentle pace, welcoming you to celebrate life’s milestones—whether it’s a special occasion, a first date, a business meeting, or just the everyday. 
                    </div>
                    <div className="text-justify lg:tracking-[1.5px]">
                    Come, find your cozy spot, savor the delightful food, and join us in celebrating the beauty of daily life at Una Villa.
                    </div>
                </div>
            </div>
            <div className="h-1 w-full  pt-40 border-b border-prim-darkGray"></div>
        </div>
    </div>
  )
}

export default OurStory