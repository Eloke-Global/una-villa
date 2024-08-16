import img1 from "../assets/ph1.png"
import img2 from "../assets/ph2.png"
import img3 from "../assets/ph3.png"
import img4 from "../assets/ph4.png"

const PeopleBehind = () => {
  return (
    <div className="w-full bg-primary pb-20">
        <div className="max-w-screen-xl mx-auto flex-col flex items-center justify-center iplex text-lg">
            <div className="text-6xl merri-italic pb-16">
                PEOPLE BEHIND THE MASTERPIECE
            </div>
            <div className="flex w-[1160px] gap-9">
                <div className="flex-1 flex gap-5">
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="w-full aspect-square">
                            <img src={img1} alt="" />
                        </div>
                        <div className="merri text-[22px] font-bold">FOOD</div>
                        <div className="text-justify">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. desktop publishing software like
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="text-justify">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into versions of Lorem Ipsum. desktop publishing software like
                        </div>
                        <div className="w-full aspect-square">
                            <img src={img2} alt="" />
                        </div>
                        <div className="merri text-[22px] font-bold">CUISINE</div>
                        <div className="text-justify">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                        </div>
                    </div>
                </div>
                <div className="w-0.5 bg-black"></div>
                <div className="flex-1 flex gap-5">
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="merri text-[22px] font-bold">HANDMADE</div>
                        <div className="text-justify">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. desktop publishing software like
                        </div>
                        <div className="w-full aspect-square">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="merri text-[22px] font-bold">GARDEN</div>
                        <div className="text-justify">
                            Lorem Ipsum has been the industry's standard dummy text
                        </div>
                        <div className="w-full aspect-square">
                            <img src={img4} alt="" />
                        </div>
                        <div className="text-justify">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into versions of Lorem Ipsum. desktop publishing software like specimen book. It has survived not only five centuries, but also the leap into versions of Lorem Ipsum. desktop publishing software like desktop publishing software like
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PeopleBehind