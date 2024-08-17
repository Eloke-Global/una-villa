import img1 from "../assets/ph1.png"
import img2 from "../assets/ph2.png"
import img3 from "../assets/ph3.png"
import img4 from "../assets/ph4.png"

const PeopleBehind = () => {
  return (
    <div className="w-full bg-primary pb-20">
        <div className="lg:max-w-screen-xl max-w-[375px] p-5 mx-auto flex-col flex items-center justify-center iplex text-xs lg:text-lg">
            <div className="text-[30px] text-center tracking-[4.4px] leading-tight lg:text-6xl merri-bitalic pb-8 lg:pb-16">
                BEHIND THE MASTERPIECE
            </div>
            <div className="flex lg:w-[1160px] flex-col lg:flex-row gap-0 lg:gap-9">
                <div className="flex-1 flex gap-5">
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="w-full">
                            <img src={img1} alt="" />
                        </div>
                        <div className="merri-bold text-[22px] font-bold">FOOD</div>
                        <div className="text-justify">
                            At Una Villa, we believe that food is more than just a meal it`s an experience. Our menu features a selection of expertly crafted dishes, from vibrant salads and hearty soups to perfectly grilled meats and flavorful vegetarian options. Each plate is a testament to our commitment to quality, with ingredients sourced from local farms and markets. Our chefs are dedicated to delivering a culinary journey that excites the senses and satisfies every craving. Whether you`re enjoying a casual lunch or a special dinner, our food is designed to leave you both delighted and nourished.
                        </div>
                    </div>
                    <div className="flex-1 max-w-[1px] lg:hidden bg-black"></div>
                    <div className="flex-1 flex flex-col gap-6 lg:pb-0 pb-6">
                        <div className="text-justify">
                            From mouthwatering appetizers to indulgent mains and delectable desserts, each dish is prepared with fresh, high-quality ingredients. Whether you're in the mood for a classic favorite or an innovative creation, our food promises an unforgettable dining experience.
                        </div>
                        <div className="w-full">
                            <img src={img2} alt="" />
                        </div>
                        <div className="merri-bold text-[22px] font-bold">CUISINE</div>
                        <div className="text-justify">
                            Explore a diverse array of cuisines at Una Villa, where each dish reflects our commitment to authentic flavors and culinary excellence. Our menu features a blend of traditional and contemporary dishes, inspired by global and local influences.
                        </div>
                    </div>
                </div>
                <div className="w-0.5 bg-black hidden lg:block"></div>
                <div className="flex-1 flex gap-5">
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="merri-bold text-[22px] font-bold">HANDMADE</div>
                        <div className="text-justify">
                            Our commitment to excellence extends to our handmade creations at Una Villa. We meticulously craft everything in-house, from our signature sauces and dressings to freshly baked bread and desserts. Our handmade approach ensures that every item is prepared with care, resulting in superior flavor and quality. Experience the difference of artisanal craftsmanship in our dishes. Indulge in the unique textures and tastes that only handmade can offer, and discover why our customers rave about our authentic, hand-crafted offerings.
                        </div>
                        <div className="w-full">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    
                    <div className="flex-1 max-w-[1px] lg:hidden bg-black"></div>
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="merri-bold text-[22px] font-bold">GARDEN</div>
                        <div className="text-justify">
                            Experience dining like never before in our enchanting garden setting at Una Villa.
                        </div>
                        <div className="w-full">
                            <img src={img4} alt="" />
                        </div>
                        <div className="text-justify">
                            Nestled amidst lush foliage and vibrant blooms, our outdoor space offers a serene escape from the hustle and bustle of city life. Enjoy your meal surrounded by the natural beauty of our carefully curated garden, complete with cozy seating areas and ambient lighting. Whether you're joining us for a romantic dinner under the stars or a leisurely brunch with friends, our garden provides the perfect atmosphere for relaxation and enjoyment.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PeopleBehind